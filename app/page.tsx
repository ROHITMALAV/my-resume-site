"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Download,
  ChevronRight,
  Code2,
  Terminal,
  Cpu,
  MonitorSmartphone,
  Bug,
  Lightbulb,
  X,
  ExternalLink
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  type ProjectType = {
    title: string;
    role: string;
    status: string;
    desc: string;
    extendedDesc: string[];
    tech: string[];
    icon: React.ReactNode;
    colorTheme: string;
  };
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Scroll to section
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const projectsData = [
    {
      title: "Furniture E-Commerce Frontend",
      role: "Single Page Application",
      status: "Currently Working",
      desc: "Developing a modern furniture web interface using JavaScript-based SPA architecture. Implementing dynamic product listings, UI components, and responsive layouts. Integrating APIs for product data improving optimization and metrics.",
      extendedDesc: [
        "Built a fully custom Single Page Application (SPA) utilizing modern JavaScript and component-based UI architecture.",
        "Engineered dynamic product listing pages with advanced sorting, filtering, and seamless pagination features.",
        "Integrated secure REST APIs to fetch and mutate product data, significantly improving client-side latency.",
        "Implemented a comprehensive responsive design ensuring pixel-perfect layouts across mobile, tablet, and desktop devices."
      ],
      tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs", "Git"],
      icon: <MonitorSmartphone size={24} />,
      colorTheme: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800",
    },
    {
      title: "Interactive Exhibition Platform",
      role: "Frontend UI Developer",
      status: "Completed",
      desc: "Developed a stunning frontend UI for an interactive event platform. Implemented advanced responsive design patterns to ensure pixel-perfect fidelity across all devices.",
      extendedDesc: [
        "Collaborated with cross-functional teams to design and build an intuitive, highly engaging event UI.",
        "Utilized modern CSS layout modules (Flexbox and Grid) to handle complex overlapping interactive exhibition elements.",
        "Ensured maximum accessibility standards and deep cross-browser compatibility.",
        "Participated stringently in UI testing workflows to eliminate layout regressions before global deployment."
      ],
      tech: ["JavaScript", "HTML5", "CSS/SCSS", "UI Testing"],
      icon: <Lightbulb size={24} />,
      colorTheme: "text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30 border-pink-200 dark:border-pink-800",
    },
    {
      title: "Event Management System",
      role: "QR Validation Module",
      status: "Completed",
      desc: "Implemented complex frontend components and supported strict manual testing efforts for an event check-in validation system driven by QR Codes.",
      extendedDesc: [
        "Developed secure client-side QR code validation modules that communicated directly with the validation servers.",
        "Designed and delivered internal real-time dashboards for event moderators to monitor check-ins.",
        "Wrote complex functional test suites and performed rigorous manual testing scenarios to catch edge-cases.",
        "Assisted deployment monitoring, providing crucial operational support during high-traffic physical events."
      ],
      tech: ["JavaScript", "QR Integration", "Jira", "Manual Testing"],
      icon: <Cpu size={24} />,
      colorTheme: "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800",
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-purple-500 selection:text-white dark:selection:bg-pink-500 dark:selection:text-white relative">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">RM.</span>
          <div className="hidden md:flex flex-row space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-pink-400 ${
                  activeTab === item.id
                    ? "text-purple-600 dark:text-pink-400"
                    : "text-neutral-500 dark:text-neutral-400"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <a
            href="/resume.pdf"
            download="Rohit_Malav_Resume.pdf"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105 active:scale-95 shadow-md shadow-pink-500/20"
          >
            <Download size={16} />
            Resume PDF
          </a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 pt-24 pb-32 flex flex-col gap-32">
        {/* Intro */}
        <section
          id="home"
          className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] scroll-mt-24 gap-16 py-12 md:py-0 relative"
        >
          {/* Subtle colorful background blobs for the hero section */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col justify-center relative z-10"
          >
             <h2 className="text-purple-600 dark:text-purple-400 font-bold mb-4 tracking-wider uppercase text-sm">
              Frontend Developer & Manual Tester
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">Rohit</span> Malav.
              <br /> I build & test digital experiences.
            </h1>
            <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed font-light">
              Motivated and detail-oriented JavaScript Developer having 3 years of
              professional exposure in web development, project coordination, and
              software testing. Skilled in building responsive Single Page Applications
              and ensuring smooth operational workflows.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollTo("projects")}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 flex items-center gap-2"
                >
                  View Projects <ChevronRight size={18} />
                </button>
                <a
                  href="/resume.pdf"
                  download="Rohit_Malav_Resume.pdf"
                  className="bg-white text-black dark:bg-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105 hover:border-pink-500/50 flex items-center gap-2 md:hidden shadow-sm"
                >
                  <Download size={18} /> Resume
                </a>
              </div>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-500/10 px-4 py-2 rounded-lg max-w-fit border border-pink-100 dark:border-pink-500/20">
                ✨ Download the PDF resumé for all available details
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full flex justify-center md:justify-end relative z-10"
          >
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 group mx-auto md:ml-auto md:mr-0">
              {/* Vibrant colorful glowing background behind the image */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full blur-2xl opacity-75 transform rotate-6 transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-neutral-950 p-2 bg-gradient-to-tr from-purple-500 to-orange-400">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-black">
                  <Image 
                    src="/profile.jpg"
                    alt="Rohit Malav Profile Picture"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Me */}
        <section id="about" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[1fr_2fr] gap-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <div className="text-neutral-600 dark:text-neutral-400 space-y-6 text-lg font-light leading-relaxed">
              <p>
                As a developer who understands operations and testing, I don&apos;t just write functional code. I build robust and highly scalable interfaces with a constant focus on quality from conception to deployment.
              </p>
              <p>
                My professional exposure bridges the gap between creating and breaking things—allowing me to architect applications intelligently and identify potential edge-cases early. I collaborate closely with backend devs for seamless API integrations resulting in functional, responsive, and performance-optimized products.
              </p>
              <div className="pt-6 grid sm:grid-cols-2 gap-4 text-neutral-900 dark:text-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600 dark:text-purple-400">
                    <MapPin size={20} />
                  </div>
                  <span>Kota, Rajasthan</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-lg text-pink-600 dark:text-pink-400">
                    <Mail size={20} />
                  </div>
                  <span>malavrohit07@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg text-orange-600 dark:text-orange-400">
                    <Download size={20} />
                  </div>
                  <a href="/resume.pdf" download="Rohit_Malav_Resume.pdf" className="underline hover:text-orange-500 transition-colors">Download PDF Resumé</a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[1fr_2fr] gap-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Experience</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <div className="space-y-12">
              <div className="relative border-l border-neutral-300 dark:border-neutral-800 pl-8 ml-4">
                <div className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 -left-[9px] top-1 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  Freelancing (Independent Projects)
                </h3>
                <h4 className="text-pink-600 dark:text-pink-400 text-sm mb-4 font-medium uppercase tracking-wide">
                  Frontend Dev, Tester & Ops Support • April 2023 – Present
                </h4>
                <ul className="list-disc pl-4 text-neutral-600 dark:text-neutral-400 space-y-2 marker:text-purple-400">
                  <li>Developing frontend features and UI components for web-based apps using JavaScript and modern technologies.</li>
                  <li>Building a modern furniture web interface leveraging JavaScript-based Single Page Application (SPA) architecture.</li>
                  <li>Debugging complex frontend issues and dramatically improving application performance.</li>
                </ul>
              </div>

              <div className="relative border-l border-neutral-300 dark:border-neutral-800 pl-8 ml-4">
                <div className="absolute w-4 h-4 rounded-full border-[3px] border-purple-500 bg-white dark:bg-neutral-950 -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  Multiply Tech India Pvt. Ltd.
                </h3>
                <h4 className="text-neutral-500 text-sm mb-4 font-medium uppercase tracking-wide">
                  Frontend Dev, Manual Tester & Project Coord • July 2020 – March 2023
                </h4>
                <ul className="list-disc pl-4 text-neutral-600 dark:text-neutral-400 space-y-2 marker:text-neutral-400">
                  <li>Developed and maintained responsive frontend interfaces using JavaScript, HTML, and CSS.</li>
                  <li>Collaborated with backend devs to integrate REST APIs ensuring smooth functionality.</li>
                  <li>Conducted manual testing (functional, UI, and integration) across B2B and B2C platforms.</li>
                  <li>Identified bugs and documented reported issues via tracking tools (Jira) to ensure timely resolution.</li>
                  <li>Assisted in deployment operations and continuously monitored live web systems.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[1fr_2fr] gap-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Skills</h2>
               <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm hover:border-purple-500/50 transition-colors group">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Code2 className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Web Design"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-sm text-neutral-700 dark:text-neutral-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm hover:border-pink-500/50 transition-colors group">
                 <div className="bg-pink-100 dark:bg-pink-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Bug className="text-pink-600 dark:text-pink-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Testing</h3>
                <div className="flex flex-wrap gap-2">
                  {["Manual Testing", "Functional Testing", "UI Testing"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-sm text-neutral-700 dark:text-neutral-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm hover:border-orange-500/50 transition-colors group">
                <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Terminal className="text-orange-600 dark:text-orange-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Jira", "Chrome DevTools", "VS Code"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-sm text-neutral-700 dark:text-neutral-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[1fr_2fr] gap-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Projects</h2>
               <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <div className="space-y-6">
              {projectsData.map((project, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedProject(project)}
                  className="group border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 hover:bg-white dark:hover:bg-neutral-900 transition-colors shadow-sm cursor-pointer overflow-hidden relative ring-1 ring-transparent hover:ring-pink-500/30"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 dark:opacity-10 pointer-events-none rounded-full ${project.colorTheme.split(' ')[0].replace('text-', 'bg-')}`}></div>
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4 relative z-10">
                    <div className="flex gap-4 items-start">
                      <div className={`mt-1 p-3 rounded-xl group-hover:scale-110 transition-transform ${project.colorTheme}`}>
                        {project.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{project.title}</h3>
                          <ExternalLink size={16} className="text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-neutral-500 font-medium">{project.role}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full whitespace-nowrap">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl pl-0 md:pl-16 relative z-10">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education */}
        <section className="scroll-mt-24 pb-12 border-b border-neutral-200 dark:border-neutral-800">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[1fr_2fr] gap-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Education</h2>
               <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <div>
              <div className="bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10 border border-purple-100 dark:border-purple-900/20 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between md:items-center hover:border-purple-300 dark:hover:border-purple-800 transition-colors">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">Bachelor of Technology (B.Tech)</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">Computer Science • Suresh Gyan Vihar University, Jaipur</p>
                </div>
                <div className="mt-4 md:mt-0 font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/40 px-4 py-2 rounded-xl text-center">
                  2020
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="relative overflow-hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-20 scroll-mt-24">
        {/* Colorful glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 blur-3xl rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s build something.</h2>
          <p className="text-neutral-500 max-w-lg mb-4 text-lg">
            Say hi or reach out with a query! 
          </p>
          <div className="inline-block bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 px-5 py-2 rounded-lg font-medium text-sm mb-10 border border-pink-200 dark:border-pink-800/30">
            Download my PDF resumé for all available details.
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
             <a
              href="mailto:malavrohit07@gmail.com"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/25 flex items-center gap-2"
            >
              <Mail size={18} /> Say Hello via Email
            </a>
            <a
               href="/resume.pdf"
               download="Rohit_Malav_Resume.pdf"
              className="border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2"
            >
              <Download size={18} /> Download Resumé
            </a>
          </div>
          
          <div className="text-sm font-medium text-neutral-400">
            © {new Date().getFullYear()} Rohit Malav. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Project Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden my-auto"
            >
              <div className="p-6 md:p-10">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-500 dark:text-neutral-400 transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="flex gap-4 items-start mb-6 pr-12">
                  <div className={`p-4 rounded-2xl ${selectedProject.colorTheme}`}>
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm font-medium text-neutral-500">{selectedProject.role}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                      <span className="text-xs font-bold px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full">
                        {selectedProject.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Project Overview</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {selectedProject.desc}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Key Contributions</h3>
                    <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-400 marker:text-neutral-400">
                      {selectedProject.extendedDesc.map((item: string, idx: number) => (
                        <li key={idx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                       {selectedProject.tech.map((t: string, idx: number) => (
                        <span key={idx} className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 font-medium whitespace-nowrap">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
