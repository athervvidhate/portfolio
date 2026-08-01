import { useState, useEffect } from "react"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"experience" | "projects" | "education" | "skills">("experience")
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) {
      setIsDarkMode(saved === "dark")
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode((prev) => !prev)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("athervvidhate@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const experience = [
    {
      title: "AI Research & Development Intern",
      organization: "Intellinum",
      period: "Jan 2026 – Present",
      description: "Researching and developing autonomous AI agent workflows and intelligent processing pipelines.",
      tech: ["Python", "PyTorch", "LLMs", "RAG", "Agentic Systems"],
      bullets: [],
    },
    {
      title: "Full-Stack Developer Intern",
      organization: "Nexa Tax",
      period: "Aug 2025 – Dec 2025",
      description: "Built production AI tax processing infrastructure and high-throughput document extraction pipelines.",
      tech: ["Python", "Flask", "LangChain", "LangGraph", "YOLO", "PyTorch", "RAG", "Docker"],
      bullets: [
        "Delivered 95% structured data extraction accuracy in production-grade AI tax processing system with 100+ PDF documents processed through RAG pipeline.",
        "Optimized computer vision pipeline achieving 60% reduction in processing time through YOLO object detection and multimodal LLM architecture, with 100% uptime for 1000+ concurrent users.",
        "Engineered scalable Flask REST API with LangChain and LangGraph state management, implementing 8+ endpoints for chatbot interaction and conversation history tracking.",
      ],
    },
    {
      title: "Software Engineer Intern",
      organization: "smartQED",
      period: "Apr 2025 – Aug 2025",
      description: "Fine-tuned diagnostic LLMs and built Model Context Protocol integrations for real-time root cause analysis.",
      tech: ["Python", "LLMs", "Model Context Protocol", "SQLite", "PyTorch", "Data Pipelines"],
      bullets: [
        "Fine-tuned a diagnostic LLM on 200+ complex technical reports, reducing root cause resolution time by 40% across product support cases.",
        "Integrated an AI analytics agent with remote SQLite database via Model Context Protocol, enabling real-time analysis pipelines.",
        "Constructed a high-fidelity dataset for LLM training by sourcing, cleaning, and structuring over 2GB of raw aviation incident data.",
      ],
    },
    {
      title: "Economics Lab Research Assistant",
      organization: "UC San Diego Economics Department",
      period: "Apr 2025 – Aug 2025",
      description: "Engineered large-scale data collection and graph network analysis pipelines on historical presidential news media.",
      tech: ["Python", "Library of Congress API", "Network Analysis", "Pandas", "Graph Theory"],
      bullets: [
        "Engineered an open-source data pipeline using the Library of Congress API to extract over 100,000 entries on historical newspaper coverage of 19th-century presidential campaigns.",
        "Analyzed relationships between historical newspaper titles using directed graphs and connected components analysis to identify and group over 300 related publications.",
        "Developed Python scripts with API pagination and error recovery logic, ensuring 100% data retrieval completion.",
      ],
    },
    {
      title: "Associate",
      organization: "Triton Consulting Group",
      period: "Jan 2024 – Present",
      description: "Audited analytics architecture, developed data tagging systems, and designed interactive executive dashboards.",
      tech: ["Product Analytics", "Tableau", "Tagging Infrastructure", "Client Strategy"],
      bullets: [
        "Audited client's product analytics platform and built a scalable, client-facing tagging infrastructure with 100+ unique tags across 20 categorized workflows.",
        "Initiated and led a targeted outreach campaign connecting with 40+ regional companies, securing new partnerships and increasing project engagement by over 15%.",
        "Designed and delivered an interactive Tableau dashboard analyzing member demographics, retention patterns, and growth opportunities.",
      ],
    },
    {
      title: "Historian",
      organization: "Tau Kappa Epsilon",
      period: "Sep 2024 – Present",
      description: "Engineered member & alumni web portal and led engineering standard operating procedures.",
      tech: ["Next.js", "React", "TypeScript", "SDLC", "Code Review"],
      bullets: [
        "Built alumni engagement portal using Next.js and React to support donations, networking, and chapter history access for 1000+ members.",
        "Implemented software development lifecycle practices including conventional commits and code review standards.",
      ],
    },
  ]

  const projects = [
    {
      title: "Concert Scout AI",
      description: "AI-powered concert recommendation platform for 150+ users. Features a multi-agent system delivering personalized music suggestions with session management and analytics.",
      tech: ["Python", "FastAPI", "Redis", "Next.js", "Google ADK"],
      github: "https://github.com/athervvidhate/ConcertScoutAI",
      demo: "https://concertscout.app",
      highlight: "150+ Users",
    },
    {
      title: "Fitness Program Recommendation System",
      description: "Workout recommendation engine processing a 600k+ row dataset using fine-tuned ALBERT/RoBERTa sentence embeddings, cosine similarity, and K-Means clustering. Containerized with Docker and deployed on GCP.",
      tech: ["Python", "Docker", "GCP", "Transformers", "scikit-learn", "Streamlit"],
      github: "https://github.com/athervvidhate/liftingML",
      demo: "https://www.workout.atherv.com",
      temporarilyDown: true,
      highlight: "600k+ Dataset",
    },
    {
      title: "Power Outage Analysis",
      description: "Data science pipeline cleaning and engineering features from power outage records. Utilized hyperparameter tuning and cross-validation with Random Forest models to boost severity prediction by 15%.",
      tech: ["Python", "scikit-learn", "Hypothesis Testing", "Pandas", "Feature Engineering"],
      demo: "https://atherv.com/poweroutageanalysis",
      highlight: "+15% Accuracy",
    },
    {
      title: "Multiple Linear Regression from Scratch",
      description: "Implemented linear regression from first principles using gradient descent and matrix calculus. Wrapped in a live Streamlit app allowing real-time data input and line-of-best-fit rendering.",
      tech: ["Python", "NumPy", "Pandas", "Linear Algebra", "Streamlit"],
      github: "https://github.com/athervvidhate/linear-regression",
      demo: "https://atherv.com/linreg",
      highlight: "From Scratch",
    },
    {
      title: "Body Sway Research Lab",
      description: "Interactive statistical visualization investigating balance control and posture mechanics. Implemented animated scrollytelling with real-time permutation testing.",
      tech: ["JavaScript", "D3.js", "Statistical Analysis", "Data Visualization"],
      github: "https://github.com/athervvidhate/bodysway",
      demo: "https://atherv.com/bodyswaylab",
      highlight: "D3 Visualization",
    },
    {
      title: "MiniGit",
      description: "Custom Git version control engine in Java implementing 10+ core Git subcommands with hash map key-value persistence and object serialization.",
      tech: ["Java", "Version Control", "Data Structures", "System Design"],
      github: "https://github.com/athervvidhate/MiniGit",
      highlight: "Custom Engine",
    },
  ]

  const education = {
    school: "UC San Diego",
    degree: "B.S. Data Science, Minor in Business Analytics",
    expectedGrad: "March 2027",
    gpa: "3.90 / 4.00",
    location: "La Jolla, CA",
  }

  const courseGroups = [
    {
      label: "Data Science & Systems",
      courses: [
        "Systems for Scalable Analytics (DSC 102)",
        "Practice of Data Science (DSC 80)",
        "Theoretical Foundations of Data Science (DSC 40A/40B)",
        "Data Structures & Algorithms (DSC 30)",
        "Principles of Data Science (DSC 20)",
        "Introduction to Data Science (DSC 10)",
      ],
    },
    {
      label: "Machine Learning & AI",
      courses: [
        "Representation Learning (DSC 140B)*",
        "Probabilistic Modeling & Machine Learning (DSC 140A)",
        "Recommender Systems & Web Mining (CSE 158)",
      ],
    },
    {
      label: "Mathematics & Statistics",
      courses: [
        "Data Analysis and Inference (MATH 189)*",
        "Probability and Statistics (MATH 183)",
        "Introduction to Probability (MATH 180A)",
        "Linear Algebra (MATH 18)",
        "Calculus III (MATH 20C)",
      ],
    },
    {
      label: "Business Analytics",
      courses: [
        "Advanced Business Analytics (MGT 155)*",
        "Information Technology - Business Analytics (MGT 153)",
        "Business Analytics (MGT 151)",
      ],
    },
  ]

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "SQL", "Java", "JavaScript", "TypeScript", "C++", "HTML/CSS"],
    },
    {
      category: "Machine Learning & AI",
      skills: ["PyTorch", "TensorFlow", "scikit-learn", "Transformers", "RAG", "LangChain", "LangGraph", "YOLO", "Dask"],
    },
    {
      category: "Data & Systems",
      skills: ["Pandas", "NumPy", "Redis", "SQLite", "PostgreSQL", "MongoDB", "FastAPI", "Docker", "GCP", "AWS"],
    },
    {
      category: "Analytics & Tools",
      skills: ["Tableau", "Git", "D3.js", "Streamlit", "Next.js", "React", "Linux"],
    },
  ]

  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-8 min-h-screen flex flex-col justify-between selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900 transition-colors duration-200">
      <div>
        {/* Top Header / Hero */}
        <section className="mb-8">
          {/* Status Badge & Theme Toggle Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for AI & Data Science</span>
            </div>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight mb-2 text-zinc-900 dark:text-zinc-50">
            Atherv Vidhate
          </h1>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
            Data Science student at <span className="text-zinc-900 dark:text-zinc-200 font-medium">UC San Diego</span>. 
            Currently AI R&D Intern at <a href="https://intellinum.com" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-100 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 transition-colors">Intellinum</a>. 
            Building end-to-end ML infrastructure, agentic LLM workflows, and data pipelines.
          </p>

          {/* Social Links Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <a
              href="https://github.com/athervvidhate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/athervvidhate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{copiedEmail ? "Copied!" : "Email"}</span>
            </button>

            <a
              href="/Atherv_Vidhate_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Resume ↗</span>
            </a>
          </div>
        </section>

        {/* Tab Switcher (ahmet.studio inspired) */}
        <div className="flex items-center gap-1 border-b border-zinc-200 dark:border-zinc-800 mb-6 pb-2 text-sm">
          {[
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "education", label: "Education & Courses" },
            { id: "skills", label: "Skills" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-2.5 py-1 rounded-md transition-all duration-150 text-sm font-medium ${
                activeTab === tab.id
                  ? "bg-zinc-200/70 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content 1: EXPERIENCE */}
        {activeTab === "experience" && (
          <section className="space-y-6">
            {experience.map((item, idx) => (
              <div key={idx} className="group transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {item.title} <span className="text-zinc-400 dark:text-zinc-500 font-normal">at</span> {item.organization}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">{item.period}</span>
                </div>

                {item.description && (
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.bullets.length > 0 && (
                  <ul className="space-y-1.5 mb-2 pl-3 border-l border-zinc-200 dark:border-zinc-800">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {item.tech && item.tech.length > 0 && (
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                    {item.tech.map((t, i) => (
                      <span key={i}>
                        {t}{i < item.tech.length - 1 && <span className="ml-2 text-zinc-300 dark:text-zinc-700">/</span>}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Tab Content 2: PROJECTS */}
        {activeTab === "projects" && (
          <section className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <span>{project.title}</span>
                    {project.highlight && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                        {project.highlight}
                      </span>
                    )}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.demo && (
                      project.temporarilyDown ? (
                        <span className="text-zinc-400 dark:text-zinc-600 italic">Down</span>
                      ) : (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium transition-colors"
                        >
                          Demo ↗
                        </a>
                      )
                    )}
                  </div>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                  {project.tech.map((t, i) => (
                    <span key={i}>
                      {t}{i < project.tech.length - 1 && <span className="ml-2 text-zinc-300 dark:text-zinc-700">/</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Tab Content 3: EDUCATION & COURSES */}
        {activeTab === "education" && (
          <section className="space-y-6">
            <div className="p-3.5 rounded-lg bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {education.school}
                </h3>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  Expected {education.expectedGrad}
                </span>
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 font-medium mb-1">
                {education.degree}
              </p>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>GPA: {education.gpa}</span>
                <span>•</span>
                <span>{education.location}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
                Coursework
              </h4>

              <div className="space-y-4">
                {courseGroups.map((group, idx) => (
                  <div key={idx}>
                    <h5 className="text-xs font-medium text-zinc-800 dark:text-zinc-200 mb-1.5">
                      {group.label}
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                      {group.courses.map((course, cIdx) => (
                        <li key={cIdx} className="flex items-center gap-1.5">
                          <span className="text-zinc-300 dark:text-zinc-700">•</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mt-4 italic">
                * Course currently in progress
              </p>
            </div>
          </section>
        )}

        {/* Tab Content 4: SKILLS */}
        {activeTab === "skills" && (
          <section className="space-y-4">
            {skillCategories.map((group, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-1 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-400 dark:text-zinc-500 flex items-center justify-between font-mono">
        <div>atherv.com</div>
        <div>Minimal • No Images</div>
      </footer>
    </main>
  )
}
