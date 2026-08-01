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
    },
    {
      title: "Fitness Program Recommendation System",
      description: "Workout recommendation engine processing a 600k+ row dataset using fine-tuned ALBERT/RoBERTa sentence embeddings, cosine similarity, and K-Means clustering. Containerized with Docker and deployed on GCP.",
      tech: ["Python", "Docker", "GCP", "Transformers", "scikit-learn", "Streamlit"],
      github: "https://github.com/athervvidhate/liftingML",
      demo: "https://www.workout.atherv.com",
      temporarilyDown: true,
    },
    {
      title: "Power Outage Analysis",
      description: "Data science pipeline cleaning and engineering features from power outage records. Utilized hyperparameter tuning and cross-validation with Random Forest models to boost severity prediction by 15%.",
      tech: ["Python", "scikit-learn", "Hypothesis Testing", "Pandas", "Feature Engineering"],
      demo: "https://atherv.com/poweroutageanalysis",
    },
    {
      title: "Multiple Linear Regression from Scratch",
      description: "Implemented linear regression from first principles using gradient descent and matrix calculus. Wrapped in a live Streamlit app allowing real-time data input and line-of-best-fit rendering.",
      tech: ["Python", "NumPy", "Pandas", "Linear Algebra", "Streamlit"],
      github: "https://github.com/athervvidhate/linear-regression",
      demo: "https://atherv.com/linreg",
    },
    {
      title: "Body Sway Research Lab",
      description: "Interactive statistical visualization investigating balance control and posture mechanics. Implemented animated scrollytelling with real-time permutation testing.",
      tech: ["JavaScript", "D3.js", "Statistical Analysis", "Data Visualization"],
      github: "https://github.com/athervvidhate/bodysway",
      demo: "https://atherv.com/bodyswaylab",
    },
    {
      title: "MiniGit",
      description: "Custom Git version control engine in Java implementing 10+ core Git subcommands with hash map key-value persistence and object serialization.",
      tech: ["Java", "Version Control", "Data Structures", "System Design"],
      github: "https://github.com/athervvidhate/MiniGit",
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
    <main className="font-sans text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-12 min-h-screen flex flex-col justify-between selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900 transition-colors duration-200">
      <div>
        {/* Header / Hero */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
              Atherv Vidhate
            </h1>

            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="text-xs font-mono text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
            >
              {isDarkMode ? "Light" : "Dark"}
            </button>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            Data Science student at <span className="text-zinc-900 dark:text-zinc-200 font-medium">UC San Diego</span>. 
            Currently AI R&D Intern at <a href="https://intellinum.com" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 transition-colors">Intellinum</a>. 
            Building end-to-end ML infrastructure, agentic LLM workflows, and data pipelines.
          </p>

          {/* Social Links Bar */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono">
            <a
              href="https://github.com/athervvidhate"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <span>github</span>
              <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>

            <a
              href="https://linkedin.com/in/athervvidhate"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <span>linkedin</span>
              <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              {copiedEmail ? "email copied!" : "email"}
            </button>

            <a
              href="/Atherv_Vidhate_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <span>resume</span>
              <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </section>

        {/* Flat Tab Switcher */}
        <div className="flex items-center gap-4 mb-8 text-sm border-none p-0">
          {[
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "education", label: "Education" },
            { id: "skills", label: "Skills" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`transition-all duration-200 text-sm font-medium ${
                activeTab === tab.id
                  ? "text-zinc-900 dark:text-zinc-100 font-semibold"
                  : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content 1: EXPERIENCE */}
        {activeTab === "experience" && (
          <section className="space-y-8">
            {experience.map((item, idx) => (
              <div
                key={idx}
                className="group hover-item hover:bg-zinc-500/5 -mx-2.5 px-2.5 py-2 rounded-lg transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {item.title} <span className="text-zinc-400 dark:text-zinc-500 font-normal">at</span> {item.organization}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">{item.period}</span>
                </div>

                {item.description && (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.bullets.length > 0 && (
                  <ul className="space-y-1.5 mb-2.5">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed flex items-start gap-2">
                        <span className="text-zinc-400 dark:text-zinc-600 select-none">•</span>
                        <span>{b}</span>
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
          <section className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group hover-item hover:bg-zinc-500/5 -mx-2.5 px-2.5 py-2 rounded-lg transition-all duration-200"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs font-mono">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-0.5"
                      >
                        <span>GitHub</span>
                        <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
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
                          className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-0.5"
                        >
                          <span>Demo</span>
                          <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                        </a>
                      )
                    )}
                  </div>
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2.5 leading-relaxed">
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
          <section className="space-y-8">
            <div className="hover-item hover:bg-zinc-500/5 -mx-2.5 px-2.5 py-2 rounded-lg transition-all duration-200">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {education.school}
                </h3>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  Expected {education.expectedGrad}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                {education.degree}
              </p>
              <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                GPA: {education.gpa} • {education.location}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                Coursework
              </h4>

              <div className="space-y-6">
                {courseGroups.map((group, idx) => (
                  <div key={idx} className="hover-item hover:bg-zinc-500/5 -mx-2.5 px-2.5 py-1.5 rounded-lg transition-all duration-200">
                    <h5 className="text-xs font-medium text-zinc-800 dark:text-zinc-200 mb-2">
                      {group.label}
                    </h5>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      {group.courses.map((course, cIdx) => (
                        <span key={cIdx}>
                          {course}{cIdx < group.courses.length - 1 && <span className="ml-2 text-zinc-300 dark:text-zinc-700">/</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mt-6 italic">
                * Course currently in progress
              </p>
            </div>
          </section>
        )}

        {/* Tab Content 4: SKILLS */}
        {activeTab === "skills" && (
          <section className="space-y-6">
            {skillCategories.map((group, idx) => (
              <div key={idx} className="hover-item hover:bg-zinc-500/5 -mx-2.5 px-2.5 py-2 rounded-lg transition-all duration-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx}>
                      {skill}{sIdx < group.skills.length - 1 && <span className="ml-2 text-zinc-300 dark:text-zinc-700">/</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}
      </div>

      {/* Flat Footer */}
      <footer className="mt-16 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 text-xs text-zinc-400 dark:text-zinc-500 flex items-center justify-between font-mono">
        <div>atherv.com</div>
        <div>Geist • Minimal</div>
      </footer>
    </main>
  )
}
