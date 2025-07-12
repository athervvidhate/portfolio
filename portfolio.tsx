import { useState, useEffect } from "react"

export default function Component() {
  const messages = [
    "I'm a Data Science Student",
    "I analyze data to find insights",
    "I build predictive models",
    "I love machine learning & AI",
  ]

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [activeTab, setActiveTab] = useState("education")

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
          }
        } else {
          if (currentText.length < currentMessage.length) {
            setCurrentText(currentMessage.slice(0, currentText.length + 1))
          } else {
            setIsPaused(true)
          }
        }
      },
      isDeleting ? 50 : isPaused ? 2000 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentMessageIndex, messages])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn using ensemble methods and feature engineering",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400&text=Churn+Analysis",
    },
    {
      title: "Stock Price Analysis Dashboard",
      description: "Interactive dashboard for analyzing stock trends with real-time data visualization",
      tech: ["Python", "Streamlit", "Plotly", "Yahoo Finance API"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400&text=Stock+Dashboard",
    },
    {
      title: "Natural Language Sentiment Analysis",
      description: "Deep learning model for sentiment analysis of social media posts and reviews",
      tech: ["Python", "TensorFlow", "NLTK", "Transformers"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400&text=NLP+Sentiment",
    },
    {
      title: "Sales Forecasting Model",
      description: "Time series forecasting model for retail sales prediction using ARIMA and LSTM",
      tech: ["Python", "TensorFlow", "Statsmodels", "Matplotlib"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400&text=Sales+Forecast",
    },
  ]

  const education = {
    degree: "B.S. Data Science",
    school: "UC San Diego",
    expectedGrad: "June 2027",
    gpa: "3.8/4.0",
    relevantCourses: [
      "Introduction to Data Science (DSC 10)",
      "Principles of Data Science (DSC 20)",
      "Statistical Methods (DSC 40A/40B)",
      "Machine Learning Fundamentals (DSC 80)",
      "Linear Algebra (MATH 18)",
      "Calculus and Analytic Geometry (MATH 20A/20B/20C)",
      "Probability and Statistics (MATH 183)",
      "Database Systems (CSE 132A)",
      "Algorithms and Data Structures (CSE 100)",
      "Python Programming (CSE 8A/8B)",
    ],
  }

  const experience = [
    {
      title: "Data Science Research Assistant",
      organization: "UCSD Machine Learning Lab",
      period: "Sep 2023 - Present",
      description: "Conducting research on deep learning applications in healthcare data analysis",
    },
    {
      title: "Data Analytics Intern",
      organization: "Local Tech Startup",
      period: "Jun 2023 - Aug 2023",
      description: "Developed predictive models for customer behavior and created data visualization dashboards",
    },
    {
      title: "Tutor - Statistics & Python",
      organization: "UCSD Academic Achievement Hub",
      period: "Jan 2023 - Present",
      description: "Tutoring undergraduate students in statistics, probability, and Python programming",
    },
    {
      title: "Vice President",
      organization: "Data Science Student Organization",
      period: "Sep 2023 - Present",
      description: "Leading workshops on machine learning and organizing industry networking events",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Full Screen Hero Section */}
      <div className="h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-8">
            Hello, I'm <span className="font-medium">Atherv</span>
          </h1>

          <div className="h-20 md:h-24 flex items-center justify-center">
            <p className="text-3xl md:text-4xl text-gray-300 font-light">
              {currentText}
              <span className="animate-pulse text-blue-400">|</span>
            </p>
          </div>
        </div>

        {/* Bouncing Arrow */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-400 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <div className="animate-bounce">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>
      </div>

      {/* About Section - VSCode Style with Image */}
      <div id="about" className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-8 text-center">About Me</h2>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* VSCode Style Code Block */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
              {/* VSCode Header */}
              <div className="bg-gray-700 px-4 py-2 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-300 text-sm ml-4">about_me.py</div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-gray-400">
                  <span className="text-purple-400">from</span> <span className="text-white">life</span>{" "}
                  <span className="text-purple-400">import</span> <span className="text-yellow-300">Human</span>
                </div>
                <br />
                <div>
                  <span className="text-purple-400">class</span> <span className="text-blue-400">Atherv</span>
                  <span className="text-white">(</span>
                  <span className="text-yellow-300">Human</span>
                  <span className="text-white">):</span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>
                  <span className="text-white">(</span>
                  <span className="text-orange-400">self</span>
                  <span className="text-white">):</span>
                </div>
                <div className="ml-8">
                  <span className="text-orange-400">self</span>
                  <span className="text-white">.full_name = </span>
                  <span className="text-green-400">'Atherv Vidhate'</span>
                </div>
                <div className="ml-8">
                  <span className="text-orange-400">self</span>
                  <span className="text-white">.school = </span>
                  <span className="text-green-400">'UC San Diego'</span>
                </div>
                <div className="ml-8">
                  <span className="text-orange-400">self</span>
                  <span className="text-white">.major = </span>
                  <span className="text-green-400">'Data Science'</span>
                </div>
                <div className="ml-8">
                  <span className="text-orange-400">self</span>
                  <span className="text-white">.expected_grad = </span>
                  <span className="text-green-400">'June 2027'</span>
                </div>
                <div className="ml-8">
                  <span className="text-orange-400">self</span>
                  <span className="text-white">.interests = [</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">'machine learning'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">'data visualization'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">'statistical modeling'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">'deep learning'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">'volleyball'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">'cooking'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-8">
                  <span className="text-white">]</span>
                </div>
                <div className="ml-8">
                  <span className="text-orange-400">self</span>
                  <span className="text-white">.skills = &#123;</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">'languages'</span>
                  <span className="text-white">: [</span>
                  <span className="text-green-400">'Python'</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">'R'</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">'SQL'</span>
                  <span className="text-white">],</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">'libraries'</span>
                  <span className="text-white">: [</span>
                  <span className="text-green-400">'Pandas'</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">'NumPy'</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">'Scikit-learn'</span>
                  <span className="text-white">],</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">'tools'</span>
                  <span className="text-white">: [</span>
                  <span className="text-green-400">'Jupyter'</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">'Git'</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">'Tableau'</span>
                  <span className="text-white">]</span>
                </div>
                <div className="ml-8">
                  <span className="text-white">&#125;</span>
                </div>
                <br />
                <div className="ml-4">
                  <span className="text-purple-400">def</span> <span className="text-blue-400">contact</span>
                  <span className="text-white">(</span>
                  <span className="text-orange-400">self</span>
                  <span className="text-white">) -&gt; </span>
                  <span className="text-yellow-300">dict</span>
                  <span className="text-white">[</span>
                  <span className="text-yellow-300">str</span>
                  <span className="text-white">, </span>
                  <span className="text-yellow-300">str</span>
                  <span className="text-white">]:</span>
                </div>
                <div className="ml-8">
                  <span className="text-purple-400">return</span> <span className="text-white">&#123;</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">'email'</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">'athervvidhate@gmail.com'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">'linkedin'</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">'linkedin.com/in/athervvidhate'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">'github'</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">'github.com/athervvidhate'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-8">
                  <span className="text-white">&#125;</span>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-80 h-80 bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="Atherv Vidhate"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Experience Tabs */}
      <div className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("education")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === "education" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                Education & Coursework
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === "experience" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                Experience & Involvement
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-800 rounded-lg p-8">
            {activeTab === "education" && (
              <div>
                <h3 className="text-2xl font-medium text-white mb-6">Education & Coursework</h3>

                <div className="mb-8">
                  <h4 className="text-xl text-blue-400 mb-2">{education.degree}</h4>
                  <p className="text-gray-300 mb-1">{education.school}</p>
                  <p className="text-gray-400 text-sm mb-1">Expected Graduation: {education.expectedGrad}</p>
                  <p className="text-gray-400 text-sm">GPA: {education.gpa}</p>
                </div>

                <div>
                  <h4 className="text-lg text-white mb-4">Relevant Coursework</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {education.relevantCourses.map((course, index) => (
                      <div key={index} className="bg-gray-700 rounded-md p-3">
                        <span className="text-gray-300 text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div>
                <h3 className="text-2xl font-medium text-white mb-6">Experience & Involvement</h3>

                <div className="space-y-6">
                  {experience.map((item, index) => (
                    <div key={index} className="border-l-2 border-blue-600 pl-6">
                      <h4 className="text-lg text-blue-400 mb-1">{item.title}</h4>
                      <p className="text-white font-medium mb-1">{item.organization}</p>
                      <p className="text-gray-400 text-sm mb-2">{item.period}</p>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-12 text-center">Data Science Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors duration-300"
              >
                {/* Project Image Header */}
                <div className="h-48 bg-gray-700 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-300"
                    >
                      GitHub →
                    </a>
                    <a
                      href={project.demo}
                      className="text-green-400 hover:text-green-300 text-sm transition-colors duration-300"
                    >
                      Live Demo →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer with Social Icons */}
      <footer className="px-4 py-12 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/athervvidhate"
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-colors duration-300 text-gray-400"
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/athervvidhate"
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-colors duration-300 text-gray-400"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:athervvidhate@gmail.com"
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-colors duration-300 text-gray-400"
            >
              <span className="sr-only">Email</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm">© 2024 Atherv Vidhate. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
