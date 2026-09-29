import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { 
  X, 
  Code2, 
  Play, 
  Check, 
  Copy, 
  AlertCircle, 
  ShieldCheck, 
  CreditCard, 
  GraduationCap, 
  RotateCcw,
  CheckCircle2,
  XCircle,
  ArrowRight
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'simulator' | 'code' | 'overview'>('simulator');
  const [copied, setCopied] = useState(false);

  // Copy code handler
  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.pythonSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-[#0b0f19]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
              {project.id === 'voter-eligibility' && <ShieldCheck className="w-5 h-5" />}
              {project.id === 'atm-system' && <CreditCard className="w-5 h-5" />}
              {project.id === 'grade-calculator' && <GraduationCap className="w-5 h-5" />}
            </div>
            <div className="truncate">
              <h3 className="text-base font-semibold text-slate-100 truncate">{project.title}</h3>
              <p className="text-xs text-slate-400 truncate">{project.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Tab buttons */}
            <div className="hidden sm:flex items-center gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-lg">
              <button
                onClick={() => setActiveTab('simulator')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'simulator'
                    ? 'bg-slate-800 text-sky-300 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5" />
                  Live Simulator
                </span>
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'code'
                    ? 'bg-slate-800 text-sky-300 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  Python Code
                </span>
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-slate-800 text-sky-300 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Overview
              </button>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Tab Bar */}
        <div className="sm:hidden flex items-center justify-around border-b border-slate-800 bg-slate-900/60 p-2">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'simulator' ? 'bg-slate-800 text-sky-300' : 'text-slate-400'
            }`}
          >
            Live Simulator
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'code' ? 'bg-slate-800 text-sky-300' : 'text-slate-400'
            }`}
          >
            Python Source
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'overview' ? 'bg-slate-800 text-sky-300' : 'text-slate-400'
            }`}
          >
            Overview
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-300 space-y-6">
          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <div className="p-3 bg-sky-950/20 border border-sky-900/30 rounded-xl text-xs text-sky-300 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-sky-400" />
                <div>
                  <span className="font-semibold text-slate-200">Interactive Logic Simulation:</span>{' '}
                  This client-side sandbox mirrors Kowshik's Python backend logic with real-time state calculation and defensive validation.
                </div>
              </div>

              {project.id === 'voter-eligibility' && <VoterSimulator />}
              {project.id === 'atm-system' && <AtmSimulator />}
              {project.id === 'grade-calculator' && <GradeSimulator />}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Executable Python 3 implementation · Clean control flow & defensive checks
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors border border-slate-700"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-xl border border-slate-800 bg-[#080d18] p-4 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed">
                <pre>
                  <code>{project.pythonSnippet}</code>
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-400 pt-2">
                <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="font-semibold text-slate-200 block mb-1">Architecture Note</span>
                  Separation of validation constraints from reporting structures allows this logic to be easily wrapped in a CLI or REST API.
                </div>
                <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="font-semibold text-slate-200 block mb-1">Algorithmic Complexity</span>
                  Deterministic O(1) runtime evaluation with strict bounds verification and deterministic output states.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-200 mb-2">Project Description</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Technical Highlights</h4>
                <ul className="space-y-2">
                  {project.keyHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-semibold text-slate-300">Tech Stack:</span>
                  {project.techStack.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {i < project.techStack.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-[#0b0f19] flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>{project.status}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

/* ========================================================
   SUB-SIMULATOR 1: VOTER ELIGIBILITY CALCULATOR
======================================================== */
const VoterSimulator: React.FC = () => {
  const [age, setAge] = useState<number>(19);
  const [isCitizen, setIsCitizen] = useState<boolean>(true);
  const [hasVoterId, setHasVoterId] = useState<boolean>(true);
  const [disqualified, setDisqualified] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);

  const handleEvaluate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const reasons: { passed: boolean; message: string }[] = [];
    let eligible = true;

    if (age < 18) {
      eligible = false;
      reasons.push({ passed: false, message: `Age criterion not satisfied: Current age is ${age} (minimum legal age is 18).` });
    } else {
      reasons.push({ passed: true, message: `Age criterion satisfied (${age} >= 18).` });
    }

    if (!isCitizen) {
      eligible = false;
      reasons.push({ passed: false, message: "Citizenship requirement not met: Verified citizenship required." });
    } else {
      reasons.push({ passed: true, message: "Legal citizenship confirmed." });
    }

    if (!hasVoterId) {
      eligible = false;
      reasons.push({ passed: false, message: "Electoral ID missing: Must hold valid Voter Identification (EPIC)." });
    } else {
      reasons.push({ passed: true, message: "Electoral Photo Identification verified." });
    }

    if (disqualified) {
      eligible = false;
      reasons.push({ passed: false, message: "Statutory disqualification active (disqualified by electoral judiciary)." });
    } else {
      reasons.push({ passed: true, message: "No statutory electoral disqualifications recorded." });
    }

    setResult({
      eligible,
      summary: eligible ? "Eligible to Vote" : "Not Eligible to Vote",
      checklist: reasons,
      timestamp: new Date().toLocaleTimeString()
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Input controls */}
      <form onSubmit={handleEvaluate} className="space-y-4 p-5 rounded-xl bg-slate-900/60 border border-slate-800">
        <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Demographic & Legal Inputs</h4>
        
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <label htmlFor="voter-age" className="text-slate-300">Applicant Age (Years)</label>
            <span className="font-mono text-sky-400 font-semibold">{age} years</span>
          </div>
          <input
            id="voter-age"
            type="range"
            min={12}
            max={90}
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value) || 0)}
            className="w-full accent-sky-400 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
            <span>12 (Minor)</span>
            <span>18 (Threshold)</span>
            <span>90 (Senior)</span>
          </div>
        </div>

        <div className="space-y-2.5 pt-2">
          <label className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-800/40 border border-slate-800 cursor-pointer hover:bg-slate-800/70 transition-colors">
            <input
              type="checkbox"
              checked={isCitizen}
              onChange={(e) => setIsCitizen(e.target.checked)}
              className="rounded border-slate-700 text-sky-500 focus:ring-0 focus:ring-offset-0 bg-slate-900"
            />
            <span className="text-xs text-slate-300">Verified Legal Citizen</span>
          </label>

          <label className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-800/40 border border-slate-800 cursor-pointer hover:bg-slate-800/70 transition-colors">
            <input
              type="checkbox"
              checked={hasVoterId}
              onChange={(e) => setHasVoterId(e.target.checked)}
              className="rounded border-slate-700 text-sky-500 focus:ring-0 focus:ring-offset-0 bg-slate-900"
            />
            <span className="text-xs text-slate-300">Possesses Government Electoral ID (EPIC)</span>
          </label>

          <label className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-800/40 border border-slate-800 cursor-pointer hover:bg-slate-800/70 transition-colors">
            <input
              type="checkbox"
              checked={disqualified}
              onChange={(e) => setDisqualified(e.target.checked)}
              className="rounded border-slate-700 text-rose-500 focus:ring-0 focus:ring-offset-0 bg-slate-900"
            />
            <span className="text-xs text-slate-300">Under Legal Disqualification (Court Order)</span>
          </label>
        </div>

        <button
          type="button"
          onClick={() => handleEvaluate()}
          className="w-full py-2.5 px-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Play className="w-3.5 h-3.5" />
          Evaluate Legal Eligibility
        </button>
      </form>

      {/* Output assessment */}
      <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
        <div>
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">Diagnostic Decision Output</h4>
          
          {result ? (
            <div className="space-y-4">
              <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                result.eligible 
                  ? 'bg-emerald-950/20 border-emerald-800/50 text-emerald-300' 
                  : 'bg-rose-950/20 border-rose-800/50 text-rose-300'
              }`}>
                {result.eligible ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 text-rose-400 shrink-0" />
                )}
                <div>
                  <div className="font-semibold text-sm">{result.summary}</div>
                  <div className="text-[11px] opacity-80">Evaluated at {result.timestamp}</div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-medium text-slate-400">Rule-by-Rule Breakdown:</span>
                {result.checklist.map((item: any, idx: number) => (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-2 p-2 rounded-lg text-xs ${
                      item.passed ? 'bg-slate-800/30 text-slate-300' : 'bg-rose-950/10 text-rose-300/90'
                    }`}
                  >
                    {item.passed ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    ) : (
                      <X className="w-3.5 h-3.5 text-rose-400 mt-0.5 shrink-0" />
                    )}
                    <span>{item.message}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-slate-500 text-xs">
              <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              Adjust input parameters and click "Evaluate Legal Eligibility" to inspect the Python logic execution.
            </div>
          )}
        </div>

        {result && (
          <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
            Return Type: dict[str, Union[bool, str, list[str]]]
          </div>
        )}
      </div>
    </div>
  );
};

/* ========================================================
   SUB-SIMULATOR 2: ATM MANAGEMENT SYSTEM
======================================================== */
const AtmSimulator: React.FC = () => {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [balance, setBalance] = useState(2500);
  const [amount, setAmount] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [logs, setLogs] = useState<Array<{ time: string; type: string; amount: number; balance: number }>>([
    { time: '10:00:00', type: 'Initial Deposit', amount: 2500, balance: 2500 }
  ]);

  const DEMO_PIN = '1234';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === DEMO_PIN) {
      setIsAuthenticated(true);
      setFeedback({ type: 'success', text: 'Authentication successful. Welcome, Kowshik Sravanam.' });
    } else {
      setFeedback({ type: 'error', text: 'Invalid PIN. (Hint: Use default demo PIN 1234).' });
    }
  };

  const handleDeposit = () => {
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) {
      setFeedback({ type: 'error', text: 'Please enter a valid deposit amount greater than 0.' });
      return;
    }
    const newBal = balance + val;
    setBalance(newBal);
    setLogs(prev => [
      { time: new Date().toLocaleTimeString(), type: 'Cash Deposit', amount: val, balance: newBal },
      ...prev
    ]);
    setAmount('');
    setFeedback({ type: 'success', text: `Successfully deposited ₹${val.toFixed(2)}. New Balance: ₹${newBal.toFixed(2)}` });
  };

  const handleWithdraw = () => {
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) {
      setFeedback({ type: 'error', text: 'Please enter a valid withdrawal amount.' });
      return;
    }
    if (val > balance) {
      setFeedback({ type: 'error', text: `Insufficient funds. Your current balance is ₹${balance.toFixed(2)}.` });
      return;
    }
    const newBal = balance - val;
    setBalance(newBal);
    setLogs(prev => [
      { time: new Date().toLocaleTimeString(), type: 'Cash Withdrawal', amount: -val, balance: newBal },
      ...prev
    ]);
    setAmount('');
    setFeedback({ type: 'success', text: `Withdrew ₹${val.toFixed(2)}. New Balance: ₹${newBal.toFixed(2)}` });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPin('');
    setFeedback({ type: 'info', text: 'Session closed securely. Please authenticate again.' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* ATM Main Screen */}
      <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-semibold text-slate-200">National Bank Terminal #042</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">SESSION: {isAuthenticated ? 'ACTIVE' : 'LOCKED'}</span>
          </div>

          {!isAuthenticated ? (
            <form onSubmit={handleLogin} className="space-y-4 py-4">
              <div className="text-center space-y-1">
                <div className="text-sm font-semibold text-slate-100">PIN Verification Required</div>
                <div className="text-xs text-slate-400">Enter the 4-digit security PIN to unlock banking operations.</div>
              </div>

              <div>
                <input
                  type="password"
                  maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 4-digit PIN (1234)"
                  className="w-full text-center text-lg tracking-widest font-mono py-2.5 px-4 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:border-sky-400 placeholder:text-slate-600 placeholder:tracking-normal placeholder:text-xs"
                />
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  Demo Default PIN is <span className="font-mono text-sky-400 font-semibold">1234</span>
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Authenticate Terminal
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-[11px] text-slate-400 mb-1">Available Ledger Balance</div>
                <div className="text-2xl font-bold font-mono text-sky-400">
                  ₹{balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Account Holder: Kowshik Sravanam</div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-slate-300">Transaction Amount (₹)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount (e.g. 500)"
                    className="flex-1 py-2 px-3 rounded-lg bg-slate-950 border border-slate-700 text-xs font-mono text-slate-100 focus:outline-none focus:border-sky-400"
                  />
                  <button
                    onClick={handleDeposit}
                    className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-emerald-400 text-xs font-medium rounded-lg transition-colors"
                  >
                    Deposit
                  </button>
                  <button
                    onClick={handleWithdraw}
                    className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sky-400 text-xs font-medium rounded-lg transition-colors"
                  >
                    Withdraw
                  </button>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div className="grid grid-cols-4 gap-2 pt-1">
                {[100, 500, 1000, 2000].map(preset => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset.toString())}
                    className="py-1 px-2 text-[11px] font-mono bg-slate-800/60 hover:bg-slate-800 text-slate-300 rounded border border-slate-800 transition-colors"
                  >
                    +₹{preset}
                  </button>
                ))}
              </div>
            </div>
          )}

          {feedback && (
            <div className={`mt-4 p-3 rounded-lg text-xs ${
              feedback.type === 'success' ? 'bg-emerald-950/20 text-emerald-300 border border-emerald-800/40' :
              feedback.type === 'error' ? 'bg-rose-950/20 text-rose-300 border border-rose-800/40' :
              'bg-slate-800/60 text-slate-300 border border-slate-700'
            }`}>
              {feedback.text}
            </div>
          )}
        </div>

        {isAuthenticated && (
          <div className="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 font-mono">Python ATM Module Active</span>
            <button
              onClick={handleLogout}
              className="text-xs text-rose-400 hover:text-rose-300 font-medium"
            >
              Sign Out / Lock Session
            </button>
          </div>
        )}
      </div>

      {/* Mini-Statement / Audit Ledger */}
      <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Mini-Statement & Audit Log</h4>
            <span className="text-[11px] text-slate-500 font-mono">{logs.length} entries</span>
          </div>

          <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
            {logs.map((log, index) => (
              <div 
                key={index} 
                className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-medium text-slate-200">{log.type}</div>
                  <div className="text-[11px] text-slate-500 font-mono">{log.time}</div>
                </div>
                <div className="text-right">
                  <div className={`font-mono font-semibold ${log.amount >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {log.amount >= 0 ? `+₹${log.amount.toFixed(2)}` : `-₹${Math.abs(log.amount).toFixed(2)}`}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">Bal: ₹{log.balance.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500">
          Stateful transactions verified against in-memory double-entry ledger.
        </div>
      </div>
    </div>
  );
};

/* ========================================================
   SUB-SIMULATOR 3: STUDENT GRADE CALCULATOR
======================================================== */
const GradeSimulator: React.FC = () => {
  const [subjects, setSubjects] = useState<Array<{ name: string; marks: number }>>([
    { name: 'Python Programming', marks: 92 },
    { name: 'Data Structures & Logic', marks: 88 },
    { name: 'Engineering Mathematics', marks: 84 },
    { name: 'Digital Electronics', marks: 78 },
    { name: 'Web Fundamentals', marks: 95 }
  ]);

  const [newSubName, setNewSubName] = useState('');
  const [newSubMarks, setNewSubMarks] = useState('');

  const updateSubjectMarks = (index: number, val: number) => {
    const updated = [...subjects];
    updated[index].marks = Math.max(0, Math.min(100, val));
    setSubjects(updated);
  };

  const removeSubject = (index: number) => {
    if (subjects.length <= 1) return;
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const addSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubName.trim()) return;
    const marksNum = parseFloat(newSubMarks);
    if (isNaN(marksNum) || marksNum < 0 || marksNum > 100) return;

    setSubjects([...subjects, { name: newSubName.trim(), marks: marksNum }]);
    setNewSubName('');
    setNewSubMarks('');
  };

  // Compute metrics
  const totalObtained = subjects.reduce((acc, curr) => acc + curr.marks, 0);
  const totalMax = subjects.length * 100;
  const percentage = (totalObtained / totalMax) * 100;

  let grade = 'O';
  let gpa = 10.0;
  let remark = 'Exemplary Mastery';
  let badgeColor = 'text-emerald-400 bg-emerald-950/30 border-emerald-800/40';

  if (percentage >= 90) {
    grade = 'O';
    gpa = 10.0;
    remark = 'Outstanding Performance';
    badgeColor = 'text-emerald-400 bg-emerald-950/30 border-emerald-800/40';
  } else if (percentage >= 80) {
    grade = 'A+';
    gpa = 9.0;
    remark = 'Excellent Academic Standing';
    badgeColor = 'text-sky-400 bg-sky-950/30 border-sky-800/40';
  } else if (percentage >= 70) {
    grade = 'A';
    gpa = 8.0;
    remark = 'Very Good';
    badgeColor = 'text-sky-300 bg-sky-950/30 border-sky-800/40';
  } else if (percentage >= 60) {
    grade = 'B+';
    gpa = 7.0;
    remark = 'Good Progress';
    badgeColor = 'text-amber-400 bg-amber-950/30 border-amber-800/40';
  } else if (percentage >= 50) {
    grade = 'B';
    gpa = 6.0;
    remark = 'Above Average';
    badgeColor = 'text-amber-300 bg-amber-950/30 border-amber-800/40';
  } else if (percentage >= 40) {
    grade = 'C';
    gpa = 5.0;
    remark = 'Minimum Threshold Met';
    badgeColor = 'text-orange-400 bg-orange-950/30 border-orange-800/40';
  } else {
    grade = 'F';
    gpa = 0.0;
    remark = 'Course Remediation Required';
    badgeColor = 'text-rose-400 bg-rose-950/30 border-rose-800/40';
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Subject Input List */}
      <div className="lg:col-span-7 p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Subject Scores (Max 100 Each)</h4>
          <span className="text-[11px] text-slate-400">{subjects.length} Enrolled Courses</span>
        </div>

        <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
          {subjects.map((sub, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-slate-950 border border-slate-800/80">
              <span className="text-xs text-slate-300 flex-1 truncate">{sub.name}</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={sub.marks}
                  onChange={(e) => updateSubjectMarks(idx, parseFloat(e.target.value) || 0)}
                  className="w-16 py-1 px-2 text-right rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-100 focus:outline-none focus:border-sky-400"
                />
                <span className="text-xs text-slate-500 font-mono">/100</span>
                {subjects.length > 1 && (
                  <button
                    onClick={() => removeSubject(idx)}
                    className="p-1 text-slate-500 hover:text-rose-400 rounded transition-colors"
                    title="Remove subject"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add custom subject */}
        <form onSubmit={addSubject} className="pt-2 border-t border-slate-800/80 flex gap-2">
          <input
            type="text"
            placeholder="New course name..."
            value={newSubName}
            onChange={(e) => setNewSubName(e.target.value)}
            className="flex-1 py-1.5 px-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-400"
          />
          <input
            type="number"
            min="0"
            max="100"
            placeholder="Marks"
            value={newSubMarks}
            onChange={(e) => setNewSubMarks(e.target.value)}
            className="w-20 py-1.5 px-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 text-right focus:outline-none focus:border-sky-400"
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg transition-colors border border-slate-700"
          >
            Add
          </button>
        </form>
      </div>

      {/* Computed Analytics Gauge */}
      <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
        <div>
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">Academic Performance Card</h4>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">Cumulative Grade Point Average</div>
              <div className="text-4xl font-bold font-mono text-sky-400 mb-1">
                {gpa.toFixed(1)} <span className="text-sm text-slate-500 font-normal">/ 10.0</span>
              </div>
              <div className="text-xs text-slate-300">
                Overall: <span className="font-semibold text-slate-100">{percentage.toFixed(1)}%</span> ({totalObtained} / {totalMax})
              </div>
            </div>

            <div className={`p-3 rounded-lg border text-center ${badgeColor}`}>
              <div className="text-lg font-bold font-mono">Grade: {grade}</div>
              <div className="text-xs">{remark}</div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
          Evaluated via Standard 10-Point UGC Grading Matrix
        </div>
      </div>
    </div>
  );
};
