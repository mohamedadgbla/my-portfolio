
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  // ✅ Load saved theme from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // ✅ Apply dark class to <html> and save preference
  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


  //  WITHOUT DARK AND LIGHT MODE
// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// // import Cv from "./components/Cv";
// import "./index.css";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     darkMode
//       ? document.documentElement.classList.add("dark")
//       : document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white transition-colors duration-300">
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <Hero />
//       <About />
//       {/* <Cv />   ✅ RENDERED HERE */}
//       <Services />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;




// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";

// import Contact from "./components/Contact";
// import './index.css'

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     darkMode
//       ? document.documentElement.classList.add("dark")
//       : document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white transition-colors duration-300">
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <Hero />
//       <About />
//       <Services />
//       <Projects />
//       <Contact />
//       <Footer /> 
//     </div>
//   );
// }

// export default App;









////////////////////////////////////////////////////////

        //  ALL IN ONE CODE
// // import './index.css'

// // function App() {


// //   return (
// //     <>
     
// //     </>
// //   )
// // }

// // export default App


// import "./index.css";
// import { useEffect, useState } from "react";

// import todoImg from "./assets/todo.png";
// import jobImg from "./assets/jobportal.png";
// import networkImg from "./assets/network.png";
// import heroImg from "./assets/hero.png"; // <-- your image file

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Dark mode toggle
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

// useEffect(() => {
//   const handleScroll = () => {
//     setScrolled(window.scrollY > 10);
//   };
//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

//   // ✅ Projects array MUST be outside JSX
//   const projects = [
//     {
//       title: "Fullstack Todo App",
//       description:
//         "A fullstack task management application with authentication and CRUD functionality.",
//       tech: ["React", "Node.js", "Express", "MongoDB"],
//       image: todoImg,
//       github: "#",
//       live: "#",
//     },
//     {
//       title: "Job Portal System",
//       description:
//         "A job listing platform built with WordPress allowing employers to post jobs and candidates to apply.",
//       tech: ["WordPress", "PHP", "MySQL"],
//       image: jobImg,
//       github: "#",
//       live: "#",
//     },
//     {
//       title: "Network Security Project",
//       description:
//         "Implemented secure networking using IPSec VPN, firewalls, ACLs, and SSH protocols.",
//       tech: ["IPSec", "Firewall", "ACL", "SSH"],
//       image: networkImg,
//       github: "#",
//       live: "#",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white transition-colors duration-300">

//       {/* Navbar */}
//  <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'} bg-white dark:bg-slate-950`}>
//   <div className="flex justify-between items-center p-6 max-w-6xl mx-auto transition-colors duration-300">
//     <h1 className="text-2xl font-bold text-indigo-600">
//       Mohamed Gbla
//     </h1>

//     <button
//       onClick={() => setDarkMode(!darkMode)}
//       className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800"
//     >
//       {darkMode ? "Light Mode" : "Dark Mode"}
//     </button>
//   </div>
//  </nav>

//       {/* Hero Section
//       <section className="flex flex-col items-center justify-center text-center mt-24 px-6">
//         <h2 className="text-4xl md:text-6xl font-bold mb-6">
//           Software Developer
//         </h2>

//         <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
//           I build modern web applications using React, Node.js and
//           clean scalable architectures.
//         </p>

//         <div className="mt-8 flex gap-4">
//           <button
//             onClick={() =>
//               document
//                 .getElementById("projects")
//                 .scrollIntoView({ behavior: "smooth" })
//             }
//             className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//           >
//             View Projects
//           </button>

//           <button
//           onClick={() =>
//             document
//               .getElementById("contact")
//               .scrollIntoView({ behavior: "smooth" })
//           }
//           className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
//         >
//           Contact Me
//         </button>
//         </div>
//       </section> */}

      
//       {/* Hero Section */}
// <section className="bg-slate-900 dark:bg-slate-950 text-white">
//   <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center md:justify-between gap-12">
    
//     {/* Left Side - Text */}
//     <div className="md:w-1/2 text-center md:text-right">
//       <h2 className="text-4xl md:text-6xl font-bold mb-4">
//         I'm <span className="text-green-500">Mohamed Gbla</span>
//       </h2>

//       <p className="text-lg text-slate-300 mb-6">
//         Software Developer specializing in modern web applications using React, Node.js, and clean scalable architectures.
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//         <button
//           onClick={() =>
//             document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
//           }
//           className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
//         >
//           View Projects
//         </button>

//         <button
//           onClick={() =>
//             document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
//           }
//           className="px-6 py-3 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition"
//         >
//           Contact Me
//         </button>
//       </div>
//     </div>

//     {/* Right Side - Image */}
//     <div className="md:w-1/2 flex justify-center md:justify-end">
//       <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
//         <img
//         src={heroImg} // ← use imported variable
//         alt="Hero"
//         className="w-full h-full object-cover"
//       />
//         {/* Optional colored circles like your image */}
//         <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-500 rounded-full opacity-40"></div>
//         <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full opacity-40"></div>
//       </div>
//     </div>

//   </div>
// </section>

//       {/* About Section
//       <section
//         id="about"
//         className="max-w-6xl mx-auto px-6 py-24"
//       >
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               About Me
//             </h2>

//             <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
//               I am a passionate Software Developer with a background in
//               Computer Science. I specialize in building modern, scalable
//               web applications using React, Node.js, and clean architecture principles.
//             </p>

//             <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
//               I enjoy solving real-world problems, improving system security,
//               and creating user-friendly digital experiences.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             {[
//               "React",
//               "Node.js",
//               "Express",
//               "MongoDB",
//               "Tailwind CSS",
//               "WordPress",
//               "Networking (IPSec, ACL)",
//               "Git & GitHub",
//             ].map((skill, index) => (
//               <div
//                 key={index}
//                 className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 text-center shadow-sm"
//               >
//                 {skill}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* About Me Section */}
// <section className="bg-slate-900 dark:bg-slate-950 text-white">
//   <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
    
//     {/* Left - Text */}
//     <div className="md:w-1/2 text-center md:text-left">
//       <h2 className="text-4xl md:text-5xl font-bold mb-6">
//         <span className="text-green-500">Professional</span> Web Developer
//       </h2>

//       <p className="text-slate-300 mb-6 leading-relaxed">
//         I am a passionate Software Developer with a background in Computer Science. 
//         I specialize in building modern, scalable web applications using React, Node.js, and clean architecture principles. 
//         I enjoy solving real-world problems, improving system security, and creating user-friendly digital experiences.
//       </p>

//       <button
//         onClick={() =>
//           document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
//         }
//         className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
//       >
//         Learn More
//       </button>
//     </div>

//     {/* Right - Image */}
//     <div className="md:w-1/2 flex justify-center md:justify-end relative">
//       <div className="relative w-64 h-64 md:w-80 md:h-80">
//         <img
//           src={heroImg} // Reuse your imported image
//           alt="About Me"
//           className="w-full h-full object-cover rounded-md"
//         />
//         {/* Decorative circle */}
//         <div className="absolute -bottom-4 -left-4 w-40 h-6 border-4 border-green-500 rounded-full"></div>
//       </div>
//     </div>

//   </div>
// </section>


// {/* Services Section */}
// <section id="services" className="bg-slate-900 text-white py-24">
//   <div className="max-w-6xl mx-auto px-6 text-center">
//     <h2 className="text-3xl md:text-4xl font-bold mb-2">
//       OUR <span className="text-green-500">SERVICES</span>
//     </h2>
//     <p className="text-slate-300 mb-12">Lorem ipsum dolor sit amet</p>

//     <div className="grid md:grid-cols-3 gap-8">
//       {/* Card 1 */}
//       <div className="p-6 bg-slate-800 rounded-xl text-center shadow hover:shadow-xl transition">
//         <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-500 rounded-full">
//           <span className="text-2xl">💻</span> {/* Replace with icon if you want */}
//         </div>
//         <h3 className="text-xl font-semibold mb-2">Web Design</h3>
//         <p className="text-slate-300 mb-4">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nostrum ullam. Aperiam iusto sunt ducimus.
//         </p>
//         <button className="px-6 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition">
//           Learn More
//         </button>
//       </div>

//       {/* Card 2 */}
//       <div className="p-6 bg-slate-800 rounded-xl text-center shadow hover:shadow-xl transition">
//         <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-500 rounded-full">
//           <span className="text-2xl">☂️</span>
//         </div>
//         <h3 className="text-xl font-semibold mb-2">UI / UX Design</h3>
//         <p className="text-slate-300 mb-4">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nostrum ullam. Aperiam iusto sunt ducimus.
//         </p>
//         <button className="px-6 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition">
//           Learn More
//         </button>
//       </div>

//       {/* Card 3 */}
//       <div className="p-6 bg-green-950 rounded-xl text-center shadow hover:shadow-xl transition">
//         <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full">
//           <span className="text-2xl text-slate-900">📰</span>
//         </div>
//         <h3 className="text-xl font-semibold mb-2">Graphics Design</h3>
//         <p className="text-green-300 mb-4">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nostrum ullam. Aperiam iusto sunt ducimus.
//         </p>
//         <button className="px-6 py-2 bg-white text-slate-900 rounded-lg hover:bg-green-500 hover:text-white transition">
//           Learn More
//         </button>
//       </div>
//     </div>
//   </div>
// </section>


//       {/* Projects Section */}
//       <section
//         id="projects"
//         className="max-w-6xl mx-auto px-6 py-24"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
//           Projects
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover hover:scale-105 transition duration-300"
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-4">
//                   {project.title}
//                 </h3>

//                 <p className="text-slate-600 dark:text-slate-400 mb-6">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((item, i) => (
//                     <span
//                       key={i}
//                       className="text-sm px-3 py-1 bg-indigo-100 dark:bg-indigo-800 dark:text-white rounded-full"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
//                   >
//                     GitHub
//                   </a>

//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//                   >
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
// <section
//   id="contact"
//   className="max-w-4xl mx-auto px-6 py-24"
// >
//   <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//     Contact Me
//   </h2>

//   <form className="space-y-6">
    
//     {/* Name */}
//     <div>
//       <label className="block mb-2 font-medium">
//         Name
//       </label>
//       <input
//         type="text"
//         placeholder="Your name"
//         className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
//       />
//     </div>

//     {/* Email */}
//     <div>
//       <label className="block mb-2 font-medium">
//         Email
//       </label>
//       <input
//         type="email"
//         placeholder="your@email.com"
//         className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
//       />
//     </div>

//     {/* Message */}
//     <div>
//       <label className="block mb-2 font-medium">
//         Message
//       </label>
//       <textarea
//         rows="5"
//         placeholder="Write your message..."
//         className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
//       ></textarea>
//     </div>

//     {/* Submit Button */}
//     <button
//       type="submit"
//       className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//     >
//       Send Message
//     </button>

//   </form>

//   <div className="mt-8 text-center text-slate-600 dark:text-slate-400">
//   <p>Email: mohamedadgbla2000@gmail.com</p>
//   <p>GitHub: https://github.com/mohamedadgbla/ </p>
//   <p>: https://www.linkedin.com/in/mohamed-a-d-gbla-522437315/</p>
// </div>
// </section>

// {/* Footer */}
// <footer className="bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-300 py-8 mt-12">
//   <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
    
//     <p className="text-sm mb-4 md:mb-0">
//       &copy; {new Date().getFullYear()} Mohamed Gbla. All rights reserved.
//     </p>

//     <div className="flex gap-4">
//       <a
//         href="https://github.com/mohamedadgbla/"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
//       >
//         GitHub
//       </a>
//       <a
//         href="https://www.linkedin.com/in/mohamed-a-d-gbla-522437315/"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
//       >
//         LinkedIn
//       </a>
//       <a
//         href=" mohamedadgbla2000@gmail.com"
//         className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
//       >
//         Email
//       </a>
//     </div>
//   </div>
// </footer>

//     </div>
//   );
// }

// export default App;