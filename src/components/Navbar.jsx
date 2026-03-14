import { useState, useEffect } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  // ✅ Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 
      ${scrolled ? "shadow-lg" : "shadow-md"} 
      bg-white dark:bg-slate-950`}
    >
      <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-500">
          Gbla
        </h1>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 transition duration-300"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;



// import { useState, useEffect } from "react";

// function Navbar({ darkMode, setDarkMode }) {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : "shadow-md"} bg-white dark:bg-slate-950`}>
//       <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
//         <h1 className="text-2xl font-bold
//         text-green-500">
//           Gbla
//         </h1>

//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800"
//         >
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;