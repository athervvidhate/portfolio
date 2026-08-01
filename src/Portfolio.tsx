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
      title: "Machine Learning Engineer Intern",
      organization: "Keysight Technologies",
      period: "June 2026 - Sep 2026",
      summary: "Built demand anomaly detection pipelines combining Isolation Forests with 7+ PyOD model ensembles and deep LSTM autoencoders.",
      tech: "Python, PyTorch, PyOD, Isolation Forest, LSTM Autoencoders, Anomaly Detection",
    },
    {
      title: "AI Research & Development Intern",
      organization: "Intellinum",
      period: "Jan 2026 - June 2026",
      summary: "Architected 6-agent autonomous AI system with Redis Streams & Claude API for Oracle Fusion SCM, eliminating manual dev cycles.",
      tech: "Python, Redis Streams, Claude API, Agentic Workflows, LLM Grounding",
    },
    {
      title: "Full-Stack Developer Intern",
      organization: "Nexa Tax",
      period: "Aug 2025 - Jan 2026",
      summary: "Delivered 95% structured document extraction via RAG pipelines and optimized YOLO vision models with 60% faster processing.",
      tech: "Python, Flask, LangChain, LangGraph, YOLO, PyTorch, RAG, Docker",
    },
    {
      title: "Economics Lab Research Assistant",
      organization: "UC San Diego Economics Dept",
      period: "Apr 2025 - Aug 2025",
      summary: "Engineered automated Library of Congress data pipeline extracting 100k+ entries and ran network graph analysis on historical media.",
      tech: "Python, Library of Congress API, Network Analysis, Pandas, Graph Theory",
    },
    {
      title: "Historian",
      organization: "Tau Kappa Epsilon",
      period: "Sep 2024 - Present",
      summary: "Built alumni engagement portal for 1000+ members using Next.js/React and established engineering SDLC standards.",
      tech: "Next.js, React, TypeScript, SDLC",
    },
  ]

  const projects = [
    {
      title: "Fitness Program Recommendation System",
      description: "Workout recommendation engine processing 600k+ rows with K-Means clustering, cosine similarity, and fine-tuned BERT embeddings. Dockerized on GCP.",
      tech: "Python, Docker, GCP, BERT Transformers, scikit-learn, Streamlit",
      github: "https://github.com/athervvidhate/liftingML",
      demo: "https://workout.atherv.com",
      status: "Down",
    },
    {
      title: "Concert Scout AI",
      description: "AI concert recommendation platform for 300+ active users built with a multi-agent Gemini pipeline, FastAPI, Next.js, and Redis.",
      tech: "Python, FastAPI, Redis, Next.js, Google Gemini",
      github: "https://github.com/athervvidhate/ConcertScoutAI",
      demo: "https://concertscout.app",
    },
    {
      title: "Power Outage Analysis",
      description: "End-to-end data science pipeline using Random Forests, hyperparameter tuning, and feature engineering to predict power outage severity (+15% accuracy).",
      tech: "Python, scikit-learn, Hypothesis Testing, Pandas",
      demo: "https://atherv.com/poweroutageanalysis",
    },
    {
      title: "Multiple Linear Regression from Scratch",
      description: "Custom linear regression engine built from first principles using matrix calculus and gradient descent, with a live interactive Streamlit dashboard.",
      tech: "Python, NumPy, Pandas, Linear Algebra, Streamlit",
      github: "https://github.com/athervvidhate/linear-regression",
      demo: "https://atherv.com/linreg",
    },
    {
      title: "Body Sway Research Lab",
      description: "Interactive data visualization investigating balance control and posture mechanics with animated scrollytelling and permutation testing.",
      tech: "JavaScript, D3.js, Statistical Analysis",
      github: "https://github.com/athervvidhate/bodysway",
      demo: "https://atherv.com/bodyswaylab",
    },
    {
      title: "MiniGit",
      description: "Custom Git version control system in Java implementing 10+ core Git subcommands with hash map key-value persistence.",
      tech: "Java, Version Control, System Architecture",
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
    { category: "Programming Languages", items: "Python, SQL, R, Java, TypeScript, JavaScript, HTML/CSS" },
    { category: "Frameworks & Libraries", items: "scikit-learn, PyTorch, TensorFlow, Spark, LangChain, pandas, Matplotlib, NumPy, Dask, FastAPI" },
    { category: "Tools & Platforms", items: "Git, Docker, AWS, GCP, Redis, PostgreSQL, Tableau, Power BI, Excel" },
  ]

  return (
    <div className="min-h-screen bg-[#ffffff] dark:bg-[#191919] text-[#222222] dark:text-[#e3e3e3] selection:bg-[#333333] selection:text-white transition-colors duration-150">
      <main className="max-w-xl mx-auto px-5 py-14 sm:py-20 flex flex-col justify-between min-h-screen font-sans">
        <div>
          {/* Header section */}
          <section className="mb-10">
            <div className="flex items-center justify-end mb-6">
              <button
                onClick={toggleTheme}
                className="text-xs text-[#888888] dark:text-[#888888] hover:text-[#111111] dark:hover:text-[#ffffff] transition-colors"
              >
                {isDarkMode ? "light mode" : "dark mode"}
              </button>
            </div>

            {/* Avatar & Hero Text Inline */}
            <div className="flex items-center gap-4 sm:gap-5 mb-6">
              <img
                src="/photo.jpeg"
                alt="Atherv Vidhate"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover object-[70%_25%] border border-[#2a2a2a] dark:border-[#2a2a2a] shrink-0"
              />
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#ffffff]">
                hey, i’m atherv
              </h1>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#444444] dark:text-[#b0b0b0] mb-4">
              Data Science &amp; Machine Learning at UC San Diego. Building autonomous AI agent pipelines, demand anomaly detection systems, and high-throughput data infrastructure.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#888888] dark:text-[#888888] mb-6">
              <span>📍</span>
              <span>uc san diego • san diego, ca</span>
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

          {/* Section Filter Pills */}
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
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-3 gap-y-0.5 mb-1">
                      <div className="text-sm font-medium text-[#111111] dark:text-[#ffffff] leading-snug">
                        <span>{item.title}</span>
                        <span className="text-[#777777] dark:text-[#888888]"> @ </span>
                        <span>{item.organization}</span>
                      </div>
                      <span className="text-xs text-[#888888] dark:text-[#888888] font-normal shrink-0 whitespace-nowrap">
                        [{item.period}]
                      </span>
                    </div>

                    <p className="text-xs text-[#666666] dark:text-[#a0a0a0] leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="text-[11px] text-[#888888] dark:text-[#777777] mt-1.5">
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
                    <div className="flex items-baseline justify-between gap-x-3 text-sm font-medium mb-1">
                      <div className="text-[#111111] dark:text-[#ffffff]">
                        <span>{project.title}</span>
                      </div>

                      <div className="flex items-center gap-3 text-xs shrink-0 whitespace-nowrap">
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

                    <p className="text-xs text-[#666666] dark:text-[#a0a0a0] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="text-[11px] text-[#888888] dark:text-[#777777] mt-1.5">
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
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-3 gap-y-0.5 text-sm font-medium">
                  <div className="text-[#111111] dark:text-[#ffffff]">
                    <span>University of California, San Diego</span>
                  </div>
                  <span className="text-xs text-[#888888] dark:text-[#888888] font-normal shrink-0 whitespace-nowrap">
                    [Expected Graduation: 2027]
                  </span>
                </div>
                <p className="text-xs text-[#555555] dark:text-[#b0b0b0] mt-1">
                  Bachelor of Science in Data Science, Minor in Business Analytics &bull; GPA: 3.90 / 4.00
                </p>
              </div>

              <div className="space-y-2.5">
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

              <div className="space-y-2.5">
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

      </main>
    </div>
  )
}
