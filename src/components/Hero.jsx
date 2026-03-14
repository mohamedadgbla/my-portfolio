import gra5Img from "../assets/gra5.jpg";

function Hero() {
  return (
    <section className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-5">

        {/* Image - First on small screens */}
        <div className="order-1 md:order-2 md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <img
              src={gra5Img}
              alt="gra5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text - Second on small screens */}
        <div className="order-2 md:order-1 md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            I'm <span className="text-green-500">Mohamed Gbla</span>
          </h2>

          <p className="text-lg text-slate-300 mb-6">
            Software Developer specializing in modern web applications using React, Node.js, and clean scalable architectures.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-green-500 rounded-lg hover:bg-green-600 transition inline-block"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white transition inline-block"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;


// import heroImg from "../assets/hero.png";

// function Hero() {
//   return (
//     <section className="bg-slate-900 dark:bg-slate-950 text-white">
//       <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-5">
         
       

//         <div className="md:w-1/2 text-center md:text-left">
//           <h2 className="text-4xl md:text-6xl font-bold mb-4">
//             I'm <span className="text-green-500">Mohamed Gbla</span>
//           </h2>

//           <p className="text-lg text-slate-300 mb-6">
//             Software Developer specializing in modern web applications using React, Node.js, and clean scalable architectures.
//           </p>

//           <div className="flex gap-4 justify-center md:justify-start">
//             <button className="px-6 py-3 bg-green-500 rounded-lg hover:bg-green-600 transition">
//               View Projects
//             </button>
//             <button className="px-6 py-3 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white transition">
//               Contact Me
//             </button>
//           </div>
//         </div>

//          <div className="md:w-1/2 flex justify-center">
//           <div className="relative w-64 h-64 md:w-90 md:h-90 rounded-full overflow-hidden">
//             <img src={heroImg} alt="Hero" className="w-full h-full object-cover " />
//           </div>
//         </div>

        

//       </div>
//     </section>
//   );
// }

// export default Hero;