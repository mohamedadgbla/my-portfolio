import { Github, Linkedin, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  // Show button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-300 py-10 relative">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mohamed Gbla. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">

            <a
              href="mailto:mohamedadgbla2000@gmail.com"
              className="hover:text-green-500 transition duration-300"
            >
              <Mail size={22} />
            </a>

            <a
              href="https://github.com/mohamedadgbla/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition duration-300"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/mohamed-a-d-gbla-522437315/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition duration-300"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://wa.me/232XXXXXXXXX" // replace with your number
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition duration-300"
            >
              <MessageCircle size={22} />
            </a>

          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default Footer;


// function Footer() {
//   return (
//     <footer className="bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-300 py-8">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
//         {/* Left - Copyright */}
//         <p className="text-sm text-center md:text-left">
//           © {new Date().getFullYear()} Mohamed Gbla. All rights reserved.
//         </p>

//         {/* Right - Social Links */}
//         <div className="flex gap-6 text-sm font-medium">
          
//           <a
//             href="https://github.com/mohamedadgbla/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-green-500 transition duration-300"
//           >
//             GitHub
//           </a>

//           <a
//             href="https://www.linkedin.com/in/mohamed-a-d-gbla-522437315/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-green-500 transition duration-300"
//           >
//             LinkedIn
//           </a>

//           <a
//             href="mailto:mohamedadgbla2000@gmail.com"
//             className="hover:text-green-500 transition duration-300"
//           >
//             Email
//           </a>

//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;