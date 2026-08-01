import { useState, useEffect } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<"all" | "experience" | "projects" | "education" | "skills">("all")
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
      period: "Jan 2026 — Present",
      url: "https://intellinum.com",
      description: "Researching and developing autonomous AI agent workflows and intelligent processing pipelines.",
      bullets: [],
      tech: "Python, PyTorch, LLMs, RAG, Agentic Workflows",
    },
    {
      title: "Full-Stack Developer Intern",
      organization: "Nexa Tax",
      period: "Aug 2025 — Dec 2025",
      description: "Built production AI tax processing infrastructure and high-throughput document extraction pipelines.",
      bullets: [
        "Delivered 95% structured data extraction accuracy in production-grade AI tax processing system with 100+ PDF documents processed through RAG pipeline.",
        "Optimized computer vision pipeline achieving 60% reduction in processing time through YOLO object detection and multimodal LLM architecture, with 100% uptime for 1000+ concurrent users.",
        "Engineered scalable Flask REST API with LangChain and LangGraph state management, implementing 8+ endpoints for chatbot interaction and conversation history tracking.",
      ],
      tech: "Python, Flask, LangChain, LangGraph, YOLO, PyTorch, RAG, Docker",
    },
    {
      title: "Software Engineer Intern",
      organization: "smartQED",
      period: "Apr 2025 — Aug 2025",
      description: "Fine-tuned diagnostic LLMs and built Model Context Protocol integrations for real-time root cause analysis.",
      bullets: [
        "Fine-tuned a diagnostic LLM on 200+ complex technical reports, reducing root cause resolution time by 40% across product support cases.",
        "Integrated an AI analytics agent with remote SQLite database via Model Context Protocol, enabling real-time analysis pipelines.",
        "Constructed a high-fidelity dataset for LLM training by sourcing, cleaning, and structuring over 2GB of raw aviation incident data.",
      ],
      tech: "Python, LLM Fine-Tuning, Model Context Protocol, SQLite, PyTorch",
    },
    {
      title: "Economics Lab Research Assistant",
      organization: "UC San Diego Economics Dept",
      period: "Apr 2025 — Aug 2025",
      description: "Engineered large-scale data collection and graph network analysis pipelines on historical presidential news media.",
      bullets: [
        "Engineered an open-source data pipeline using the Library of Congress API to extract over 100,000 entries on historical newspaper coverage of 19th-century presidential campaigns.",
        "Analyzed relationships between historical newspaper titles using directed graphs and connected components analysis to identify and group over 300 related publications.",
        "Developed Python scripts with API pagination and error recovery logic, ensuring 100% data retrieval completion.",
      ],
      tech: "Python, Library of Congress API, Network Analysis, Pandas, Graph Theory",
    },
    {
      title: "Associate",
      organization: "Triton Consulting Group",
      period: "Jan 2024 — Present",
      description: "Audited analytics architecture, developed data tagging systems, and designed interactive executive dashboards.",
      bullets: [
        "Audited client's product analytics platform and built a scalable, client-facing tagging infrastructure with 100+ unique tags across 20 categorized workflows.",
        "Initiated and led a targeted outreach campaign connecting with 40+ regional companies, securing new partnerships and increasing project engagement by over 15%.",
        "Designed and delivered an interactive Tableau dashboard analyzing member demographics, retention patterns, and growth opportunities.",
      ],
      tech: "Product Analytics, Tableau, Tagging Infrastructure, Client Strategy",
    },
    {
      title: "Historian",
      organization: "Tau Kappa Epsilon",
      period: "Sep 2024 — Present",
      description: "Engineered member & alumni web portal and led engineering standard operating procedures.",
      bullets: [
        "Built alumni engagement portal using Next.js and React to support donations, networking, and chapter history access for 1000+ members.",
        "Implemented software development lifecycle practices including conventional commits and code review standards.",
      ],
      tech: "Next.js, React, TypeScript, SDLC, Code Review",
    },
  ]

  const projects = [
    {
      title: "Concert Scout AI",
      description: "AI-powered concert recommendation platform for 150+ users. Multi-agent system delivering personalized music suggestions with session management and analytics.",
      tech: "Python, FastAPI, Redis, Next.js, Google ADK",
      github: "https://github.com/athervvidhate/ConcertScoutAI",
      demo: "https://concertscout.app",
    },
    {
      title: "Fitness Program Recommendation System",
      description: "Workout recommendation engine processing a 600k+ row dataset using fine-tuned ALBERT/RoBERTa sentence embeddings, cosine similarity, and K-Means clustering. Dockerized and deployed on GCP.",
      tech: "Python, Docker, GCP, Transformers, scikit-learn, Streamlit",
      github: "https://github.com/athervvidhate/liftingML",
      demo: "https://www.workout.atherv.com",
      status: "Temporarily Down",
    },
    {
      title: "Power Outage Analysis",
      description: "Data science pipeline engineering features from power outage records. Hyperparameter tuning and Random Forest models boosting severity prediction by 15%.",
      tech: "Python, scikit-learn, Hypothesis Testing, Pandas",
      demo: "https://atherv.com/poweroutageanalysis",
    },
    {
      title: "Multiple Linear Regression from Scratch",
      description: "Linear regression engine built from first principles using gradient descent and matrix calculus. Wrapped in a live Streamlit app for real-time visualization.",
      tech: "Python, NumPy, Pandas, Linear Algebra, Streamlit",
      github: "https://github.com/athervvidhate/linear-regression",
      demo: "https://atherv.com/linreg",
    },
    {
      title: "Body Sway Research Lab",
      description: "Interactive statistical visualization investigating balance control and posture mechanics with animated scrollytelling and permutation testing.",
      tech: "JavaScript, D3.js, Statistical Analysis",
      github: "https://github.com/athervvidhate/bodysway",
      demo: "https://atherv.com/bodyswaylab",
    },
    {
      title: "MiniGit",
      description: "Custom Git version control engine in Java implementing 10+ core Git subcommands with hash map key-value persistence and object serialization.",
      tech: "Java, Version Control, Data Structures",
      github: "https://github.com/athervvidhate/MiniGit",
    },
  ]

  const courseGroups = [
    {
      label: "Data Science & Systems",
      courses: "DSC 102 (Scalable Analytics), DSC 80 (Practice of DS), DSC 40A/B (Theoretical Foundations), DSC 30 (Data Structures), DSC 20, DSC 10",
    },
    {
      label: "Machine Learning & AI",
      courses: "DSC 140B (Representation Learning)*, DSC 140A (Probabilistic ML), CSE 158 (Recommender Systems)",
    },
    {
      label: "Mathematics & Statistics",
      courses: "MATH 189 (Data Analysis & Inference)*, MATH 183 (Stats), MATH 180A (Probability), MATH 18 (Linear Algebra), MATH 20C (Calculus III)",
    },
    {
      label: "Business Analytics",
      courses: "MGT 155 (Advanced Analytics)*, MGT 153 (IT Analytics), MGT 151 (Business Analytics)",
    },
  ]

  const skillCategories = [
    { category: "Languages", items: "Python, SQL, Java, JavaScript, TypeScript, C++, HTML/CSS" },
    { category: "Machine Learning & AI", items: "PyTorch, TensorFlow, scikit-learn, Transformers, RAG, LangChain, LangGraph, YOLO, Dask" },
    { category: "Data & Systems", items: "Pandas, NumPy, Redis, SQLite, PostgreSQL, MongoDB, FastAPI, Docker, GCP, AWS" },
    { category: "Analytics & Tools", items: "Tableau, Git, D3.js, Streamlit, Next.js, React, Linux" },
  ]

  return (
    <div className="min-h-screen bg-[#ffffff] dark:bg-[#191919] text-[#222222] dark:text-[#e3e3e3] selection:bg-[#333333] selection:text-white transition-colors duration-150">
      <main className="max-w-xl mx-auto px-5 py-14 sm:py-20 flex flex-col justify-between min-h-screen font-sans">
        <div>
          {/* Header section (Matching reference image layout & typography) */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs text-[#888888] dark:text-[#888888] tracking-wide">
                atherv.com
              </span>

              <button
                onClick={toggleTheme}
                className="text-xs text-[#888888] dark:text-[#888888] hover:text-[#111111] dark:hover:text-[#ffffff] transition-colors"
              >
                {isDarkMode ? "light mode" : "dark mode"}
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#ffffff] mb-4">
              hey, i’m atherv
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-[#444444] dark:text-[#b0b0b0] mb-4">
              I do data science, ML infrastructure, and web dev. I love to go deep into LLM systems, agentic workflows, and scalable data pipelines.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#888888] dark:text-[#888888] mb-6">
              <span>📍</span>
              <span>uc san diego &bull; san diego, ca</span>
            </div>

            {/* Links bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a
                href="https://github.com/athervvidhate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555555] dark:text-[#a0a0a0] hover:text-[#111111] dark:hover:text-[#ffffff] underline underline-offset-4 decoration-[#cccccc] dark:decoration-[#444444] transition-colors"
              >
                github
              </a>
              <a
                href="https://linkedin.com/in/athervvidhate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555555] dark:text-[#a0a0a0] hover:text-[#111111] dark:hover:text-[#ffffff] underline underline-offset-4 decoration-[#cccccc] dark:decoration-[#444444] transition-colors"
              >
                linkedin
              </a>
              <button
                onClick={handleCopyEmail}
                className="text-[#555555] dark:text-[#a0a0a0] hover:text-[#111111] dark:hover:text-[#ffffff] underline underline-offset-4 decoration-[#cccccc] dark:decoration-[#444444] transition-colors cursor-pointer"
              >
                {copiedEmail ? "email copied!" : "email"}
              </button>
              <a
                href="/Atherv_Vidhate_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555555] dark:text-[#a0a0a0] hover:text-[#111111] dark:hover:text-[#ffffff] underline underline-offset-4 decoration-[#cccccc] dark:decoration-[#444444] transition-colors"
              >
                resume pdf
              </a>
            </div>
          </section>

          {/* Section Filter Pills (Notion block navigation) */}
          <div className="flex items-center gap-2 mb-8 text-xs">
            {[
              { id: "all", label: "all" },
              { id: "experience", label: "experience" },
              { id: "projects", label: "projects" },
              { id: "education", label: "education" },
              { id: "skills", label: "skills" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as typeof activeSection)}
                className={`px-2.5 py-1 rounded transition-colors text-xs font-medium ${
                  activeSection === tab.id
                    ? "bg-[#efefed] dark:bg-[#2d2d2d] text-[#111111] dark:text-[#ffffff]"
                    : "text-[#888888] dark:text-[#888888] hover:text-[#333333] dark:hover:text-[#cccccc]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* EXPERIENCE SECTION */}
          {(activeSection === "all" || activeSection === "experience") && (
            <section className="mb-10">
              <div className="inline-block px-2.5 py-0.5 rounded bg-[#f1f1ef] dark:bg-[#2a2a2a] text-xs font-semibold text-[#37352f] dark:text-[#e3e3e3] mb-4">
                Experience
              </div>

              <div className="space-y-4">
                {experience.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 -mx-2.5 rounded-md hover:bg-[#f5f5f4] dark:hover:bg-[#232323] transition-colors duration-150"
                  >
                    <div className="text-sm font-medium text-[#111111] dark:text-[#ffffff] leading-snug">
                      <span className="text-[#888888] dark:text-[#888888] mr-1.5">&gt;</span>
                      <span>{item.title}</span>
                      <span className="text-[#777777] dark:text-[#888888]"> @ </span>
                      <span className="text-[#111111] dark:text-[#ffffff]">{item.organization}</span>
                      <span className="text-xs text-[#888888] dark:text-[#888888] font-normal ml-2">
                        [{item.period}]
                      </span>
                    </div>

                    {item.description && (
                      <p className="text-xs text-[#666666] dark:text-[#a0a0a0] mt-1 pl-4 leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    {item.bullets.length > 0 && (
                      <ul className="mt-2 pl-4 space-y-1">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="text-xs text-[#555555] dark:text-[#999999] leading-relaxed flex items-start gap-1.5">
                            <span className="text-[#888888] dark:text-[#666666]">&bull;</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="text-[11px] text-[#888888] dark:text-[#777777] mt-1.5 pl-4">
                      {item.tech}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS SECTION */}
          {(activeSection === "all" || activeSection === "projects") && (
            <section className="mb-10">
              <div className="inline-block px-2.5 py-0.5 rounded bg-[#f1f1ef] dark:bg-[#2a2a2a] text-xs font-semibold text-[#37352f] dark:text-[#e3e3e3] mb-4">
                Projects
              </div>

              <div className="space-y-4">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 -mx-2.5 rounded-md hover:bg-[#f5f5f4] dark:hover:bg-[#232323] transition-colors duration-150"
                  >
                    <div className="flex items-baseline justify-between text-sm font-medium">
                      <div className="text-[#111111] dark:text-[#ffffff]">
                        <span className="text-[#888888] dark:text-[#888888] mr-1.5">&gt;</span>
                        <span>{project.title}</span>
                      </div>

                      <div className="flex items-center gap-3 text-xs">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#666666] dark:text-[#888888] hover:text-[#111111] dark:hover:text-[#ffffff] underline underline-offset-2 decoration-[#cccccc] dark:decoration-[#444444] transition-colors"
                          >
                            github
                          </a>
                        )}
                        {project.demo && (
                          project.status ? (
                            <span className="text-[#888888] dark:text-[#777777] italic text-[11px]">[{project.status}]</span>
                          ) : (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#666666] dark:text-[#888888] hover:text-[#111111] dark:hover:text-[#ffffff] underline underline-offset-2 decoration-[#cccccc] dark:decoration-[#444444] transition-colors"
                            >
                              demo
                            </a>
                          )
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-[#666666] dark:text-[#a0a0a0] mt-1 pl-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="text-[11px] text-[#888888] dark:text-[#777777] mt-1.5 pl-4">
                      {project.tech}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EDUCATION SECTION */}
          {(activeSection === "all" || activeSection === "education") && (
            <section className="mb-10">
              <div className="inline-block px-2.5 py-0.5 rounded bg-[#f1f1ef] dark:bg-[#2a2a2a] text-xs font-semibold text-[#37352f] dark:text-[#e3e3e3] mb-4">
                Education
              </div>

              <div className="p-2.5 -mx-2.5 rounded-md hover:bg-[#f5f5f4] dark:hover:bg-[#232323] transition-colors duration-150 mb-4">
                <div className="text-sm font-medium text-[#111111] dark:text-[#ffffff]">
                  <span className="text-[#888888] dark:text-[#888888] mr-1.5">&gt;</span>
                  <span>UC San Diego</span>
                  <span className="text-xs text-[#888888] dark:text-[#888888] font-normal ml-2">
                    [Expected March 2027]
                  </span>
                </div>
                <p className="text-xs text-[#555555] dark:text-[#b0b0b0] mt-1 pl-4">
                  B.S. Data Science, Minor in Business Analytics &bull; GPA: 3.90 / 4.00
                </p>
              </div>

              <div className="space-y-2.5 pl-4">
                {courseGroups.map((group, idx) => (
                  <div key={idx} className="text-xs">
                    <span className="text-[#888888] dark:text-[#888888] font-medium mr-1.5">{group.label}:</span>
                    <span className="text-[#555555] dark:text-[#a0a0a0]">{group.courses}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SKILLS SECTION */}
          {(activeSection === "all" || activeSection === "skills") && (
            <section className="mb-10">
              <div className="inline-block px-2.5 py-0.5 rounded bg-[#f1f1ef] dark:bg-[#2a2a2a] text-xs font-semibold text-[#37352f] dark:text-[#e3e3e3] mb-4">
                Skills
              </div>

              <div className="space-y-2.5 pl-4">
                {skillCategories.map((group, idx) => (
                  <div key={idx} className="text-xs">
                    <span className="text-[#888888] dark:text-[#888888] font-medium mr-1.5">{group.category}:</span>
                    <span className="text-[#555555] dark:text-[#a0a0a0]">{group.items}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Minimal OS Footer */}
        <footer className="mt-12 pt-6 border-t border-[#eeeeee] dark:border-[#2a2a2a] text-xs text-[#888888] dark:text-[#777777] flex items-center justify-between">
          <div>atherv vidhate &bull; 2026</div>
          <div>native interface</div>
        </footer>
      </main>
    </div>
  )
}
