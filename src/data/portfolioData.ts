export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  keyHighlights: string[];
  pythonSnippet: string;
  status: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    details: string;
  }[];
}

export interface HackathonEntry {
  title: string;
  type: string;
  date: string;
  role: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kowshik Sravanam",
    role: "Aspiring AI Engineer",
    academicStatus: "First-Year B.Tech Student (Semester 1)",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    email: "kowshiksravanam6565@gmail.com",
    github: "https://github.com/kowshik008",
    linkedin: "https://www.linkedin.com/in/kowshik-sravanam-622b7942b",
    tagline: "Building solid foundations in algorithmic logic, clean Python engineering, and emerging Generative AI architectures.",
    bio: "I am a dedicated first-year B.Tech Computer Science student driven by a deep curiosity for how computational logic and artificial intelligence solve real-world problems. From designing robust logic utilities and simulation programs in Python to actively pitching in hackathons and ideathons, I focus on strong programming fundamentals while proactively expanding my knowledge into Generative AI workflows.",
    focusAreas: [
      "Algorithmic Thinking & Python Systems",
      "Full-Stack Web Foundations (HTML5, Modern CSS, JS)",
      "Generative AI & LLM Prompt Architecture",
      "Collaborative Problem Solving in Hackathons"
    ]
  },
  skills: [
    {
      title: "Core Languages",
      description: "Foundational programming languages utilized for procedural logic, OOP, and data structures.",
      skills: [
        { name: "Python", level: "Primary Focus", details: "Control flow, OOP, functions, data structures, automation utilities" },
        { name: "JavaScript (ES6+)", level: "Foundational", details: "DOM manipulation, asynchronous fetching, modern array methods" },
        { name: "C / C++ Basics", level: "Academic Core", details: "Memory basics, pointers, standard I/O, core algorithmic constructs" }
      ]
    },
    {
      title: "Web Technologies",
      description: "Standards-compliant UI development and structured interface design.",
      skills: [
        { name: "HTML5", level: "Proficient", details: "Semantic elements, web accessibility standards, form validations" },
        { name: "CSS3 & Modern Layouts", level: "Proficient", details: "Flexbox, CSS Grid, mobile-first responsive media queries" },
        { name: "Tailwind CSS", level: "Active Use", details: "Utility-first architecture, component styling, dark theme systems" }
      ]
    },
    {
      title: "AI & Emerging Tech",
      description: "Trajectory toward machine intelligence and modern AI developer tools.",
      skills: [
        { name: "Generative AI Foundations", level: "Active Exploration", details: "Transformer principles, prompt engineering, system framing" },
        { name: "LLM API Integration", level: "Hands-on", details: "Prompt chaining, structured JSON outputs, multimodal concepts" },
        { name: "Applied Problem Decomposition", level: "Practical", details: "Translating ambiguous problem statements into technical specifications" }
      ]
    },
    {
      title: "Developer Tools & Workflows",
      description: "Version control, development environments, and collaborative development tools.",
      skills: [
        { name: "Git & GitHub", level: "Daily Use", details: "Branching, commits, pull requests, repository management" },
        { name: "VS Code", level: "Daily Use", details: "Debugging extensions, code formatting, linting configurations" },
        { name: "Command Line / Terminal", level: "Working Knowledge", details: "Bash navigation, file operations, script execution" }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "voter-eligibility",
      title: "Voter Eligibility Calculator",
      subtitle: "Deterministic Demographic & Legal Verification Engine",
      description: "A Python-based logic utility that evaluates user demographic parameters against statutory legal voting requirements. It systematically checks age constraints, citizenship status, valid voter identification, and jurisdictional disqualifications to deliver an authoritative eligibility assessment with actionable reasoning.",
      image: "/src/assets/images/project_voter_calc_1790680115206.jpg",
      category: "Python Logic & Validation",
      techStack: ["Python 3", "Algorithmic Logic", "Input Validation", "Defensive Programming"],
      keyHighlights: [
        "Defensive error handling for non-numeric and out-of-range user inputs",
        "Deterministic multi-condition rule tree modeling legal voter registration statutes",
        "Clear diagnostic report detailing why a user qualifies or exact deficiencies needed to register",
        "Modular Python functions structured for extensibility and unit testing"
      ],
      pythonSnippet: `def check_voter_eligibility(age: int, is_citizen: bool, has_voter_id: bool, disqualified: bool = False) -> dict:
    """
    Evaluates voter eligibility based on statutory legal requirements.
    Returns status boolean and detailed itemized rationale.
    """
    if age < 0 or age > 130:
        raise ValueError("Invalid age provided. Must be between 0 and 130.")
    
    reasons = []
    eligible = True

    if age < 18:
        eligible = False
        reasons.append(f"Age requirement not met: User is {age} (minimum required is 18).")
    else:
        reasons.append(f"Age requirement satisfied ({age} >= 18).")

    if not is_citizen:
        eligible = False
        reasons.append("Citizenship requirement not met: Must be a verified legal citizen.")
    else:
        reasons.append("Citizenship status verified.")

    if not has_voter_id:
        eligible = False
        reasons.append("Missing government-issued voter registration / Electoral Photo ID Card (EPIC).")
    else:
        reasons.append("Valid voter registration ID present.")

    if disqualified:
        eligible = False
        reasons.append("Disqualified under statutory jurisdictional electoral restrictions.")

    return {
        "is_eligible": eligible,
        "summary": "ELIGIBLE TO VOTE" if eligible else "INELIGIBLE TO VOTE",
        "checklist": reasons
    }`,
      status: "Production Ready Logic"
    },
    {
      id: "atm-system",
      title: "ATM Management System",
      subtitle: "Secure Banking Terminal Simulation & Transaction Ledger",
      description: "A practical command-driven application simulating real-world automated teller machine operations. Implements secure PIN authentication, session management, cash deposit, cash withdrawal with overdraft protection, real-time balance queries, and a transaction audit ledger.",
      image: "/src/assets/images/project_atm_system_1790680127611.jpg",
      category: "Banking System Simulation",
      techStack: ["Python 3", "Object-Oriented Programming", "State Management", "Data Validation"],
      keyHighlights: [
        "Robust PIN authentication with attempt throttling to prevent unauthorized access",
        "Atomic balance modifications preventing invalid states or negative balance overdraws",
        "In-memory transaction ledger recording timestamped credit and debit entries",
        "Clean terminal interface with structured account summary outputs"
      ],
      pythonSnippet: `from datetime import datetime

class ATMSystem:
    def __init__(self, account_holder: str, initial_pin: str, starting_balance: float = 1000.0):
        self.account_holder = account_holder
        self._pin = initial_pin
        self._balance = starting_balance
        self.transactions = []
        self._log_transaction("Account Initialized", starting_balance, self._balance)

    def verify_pin(self, entered_pin: str) -> bool:
        return self._pin == entered_pin

    def check_balance(self) -> float:
        return self._balance

    def deposit(self, amount: float) -> bool:
        if amount <= 0:
            return False
        self._balance += amount
        self._log_transaction("Deposit (Cash)", amount, self._balance)
        return True

    def withdraw(self, amount: float) -> tuple[bool, str]:
        if amount <= 0:
            return False, "Withdrawal amount must be strictly greater than zero."
        if amount > self._balance:
            return False, f"Insufficient funds. Current balance: INR {self._balance:.2f}"
        
        self._balance -= amount
        self._log_transaction("Withdrawal (ATM)", -amount, self._balance)
        return True, "Withdrawal successful."

    def _log_transaction(self, description: str, delta: float, balance_after: float):
        self.transactions.append({
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "description": description,
            "amount": delta,
            "balance": balance_after
        })`,
      status: "Functional Prototype"
    },
    {
      id: "grade-calculator",
      title: "Student Grade Calculator",
      subtitle: "Automated Academic Performance Evaluation & Analytics",
      description: "An automated academic utility designed to ingest multiple subject marks, compute aggregate scores, calculate percentage, map to university 10-point GPA grading scales, and generate an analytical performance breakdown with individualized feedback.",
      image: "/src/assets/images/project_grade_calc_1790680139758.jpg",
      category: "Academic Analytics Utility",
      techStack: ["Python 3", "Data Aggregation", "Scale Algorithms", "Performance Metrics"],
      keyHighlights: [
        "Dynamic subject entry supporting variable course loads and credit weighting",
        "Deterministic grading scale mapping scores to standard academic tiers (O, A+, A, B+, B, C, F)",
        "Automated computation of overall percentage, average score, and GPA index",
        "Generates actionable academic performance summary and classification"
      ],
      pythonSnippet: `def calculate_student_performance(subject_scores: dict[str, float]) -> dict:
    """
    Computes total score, percentage, GPA (10-point scale),
    and academic grade classification for enrolled courses.
    """
    if not subject_scores:
        raise ValueError("Subject scores dictionary cannot be empty.")

    total_marks = sum(subject_scores.values())
    max_marks = len(subject_scores) * 100.0
    percentage = (total_marks / max_marks) * 100.0

    # 10-point University Scale Mapping
    if percentage >= 90.0:
        grade, gpa, remark = "O (Outstanding)", 10.0, "Exemplary Academic Mastery"
    elif percentage >= 80.0:
        grade, gpa, remark = "A+ (Excellent)", 9.0, "High Distinction"
    elif percentage >= 70.0:
        grade, gpa, remark = "A (Very Good)", 8.0, "Strong Performance"
    elif percentage >= 60.0:
        grade, gpa, remark = "B+ (Good)", 7.0, "Above Average Standard"
    elif percentage >= 50.0:
        grade, gpa, remark = "B (Above Average)", 6.0, "Satisfactory Completion"
    elif percentage >= 40.0:
        grade, gpa, remark = "C (Pass)", 5.0, "Minimum Threshold Met"
    else:
        grade, gpa, remark = "F (Fail)", 0.0, "Requires Academic Remediation"

    return {
        "total_obtained": round(total_marks, 2),
        "total_maximum": round(max_marks, 2),
        "percentage": round(percentage, 2),
        "gpa": gpa,
        "grade": grade,
        "assessment": remark,
        "breakdown": subject_scores
    }`,
      status: "Production Ready Logic"
    }
  ] as Project[],
  hackathons: [
    {
      title: "Inter-College Hackathon & Ideathon Series",
      type: "Collegiate Innovation Sprint",
      date: "Semester 1 (2025–2026)",
      role: "Core Technical Ideator & Logic Developer",
      description: "Active participant in competitive university hackathons and ideathons during early B.Tech studies. Collaborated with multi-disciplinary peers to conceptualize, architect, and pitch software solutions to real-world operational challenges under tight deadlines.",
      highlights: [
        "Brainstormed and pitched innovative software architectures under strict time limits",
        "Created wireframe logic flowcharts and functional Python prototype demonstrations",
        "Demonstrated strong team communication, task division, and rapid presentation delivery"
      ]
    },
    {
      title: "AI & Automation Student Ideation Sprint",
      type: "Emerging Tech Challenge",
      date: "Fall 2025",
      role: "Concept Architect & Prompt Lead",
      description: "Explored generative AI applications for smart student campus workflows. Researched how LLMs, retrieval-augmented queries, and automated scripting can streamline study material organization and peer question answering.",
      highlights: [
        "Authored structured prompt pipelines for automated study guide synthesis",
        "Researched feasibility and ethical boundaries of student AI assistants",
        "Received constructive feedback from senior engineering faculty on logic rigor"
      ]
    },
    {
      title: "Algorithmic Code Sprint & Logic Challenges",
      type: "Competitive Problem Solving",
      date: "Ongoing",
      role: "Individual Participant",
      description: "Regular engagement in competitive programming challenges and college coding sprints focused on time complexity, loop optimizations, and edge-case handling.",
      highlights: [
        "Consistent practice in Python string parsing, hash maps, and conditional branches",
        "Strengthening problem-solving speed and bug debugging under pressure"
      ]
    }
  ] as HackathonEntry[],
  timeline: [
    {
      year: "2025 - Present",
      title: "B.Tech in Computer Science & Engineering",
      subtitle: "First-Year Undergraduate (Semester 1)",
      description: "Focusing on CS mathematical foundations, procedural & object-oriented programming in Python, web architecture fundamentals, and digital logic."
    },
    {
      year: "2025",
      title: "Hackathons & Practical Projects",
      subtitle: "Active Competitor & Builder",
      description: "Built the Voter Eligibility Calculator, ATM Management System, and Student Grade Calculator. Actively participating in collegiate hackathons and ideathons."
    },
    {
      year: "2026 & Beyond",
      title: "Trajectory: Generative AI Engineering",
      subtitle: "Target Specialization",
      description: "Deepening expertise in deep learning foundations, transformer models, prompt engineering, vector databases, and full-stack AI-integrated web applications."
    }
  ]
};
