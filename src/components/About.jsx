// import heroImg from "../assets/hero.png";

// function About() {
//   return (
//     <section id="about" className="bg-white text-black">
//       <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row m-4 items-center gap-6">
        
//         {/* Left - Text */}
//         <div className="md:w-1/2 text-center md:text-right md: m-4 ">
//           <h2 className="text-4xl md:text-3xl font-bold mb-6">
//             <span className="text-green-300">Professional</span> Web Developer
//           </h2>

//           <p className="text-black mb-6 leading-relaxed">
//             I am a passionate Software Developer with a background in Computer Science. 
//             I specialize in building modern, scalable web applications using React, Node.js, 
//             and clean architecture principles.
//           </p>

//           <p className="text-slate-600 mb-8 leading-relaxed">
//             I enjoy solving real-world problems, improving system security, 
//             and creating user-friendly digital experiences that deliver impact.
//           </p>

//           <button
//             onClick={() =>
//               document
//                 .getElementById("projects")
//                 .scrollIntoView({ behavior: "smooth" })
//             }
//             className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
//           >
//             Learn More
//           </button>
//         </div>

//         {/* Right - Image */}
//         <div className="md:w-1/2 flex justify-center md:justify-end relative">
//           <div className="relative w-64 h-64 md:w-80 md:h-80">
            
//             <img
//               src={heroImg}
//               alt="About Mohamed Gbla"
//               className="w-full h-full object-cover rounded-md"
//             />

//             {/* Decorative Ellipse */}
//             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-8 border-4 border-green-500 rounded-full"></div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default About;


import gra2Img from "../assets/gra2.jpg";

export default function AboutExample() {
  return (
    <section className="bg-slate-900 dark:bg-slate-950 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-6">
        
        {/* LEFT SIDE (IMAGE) */}
        <div className="md:w-1/2">
          <img
            src={gra2Img}
            alt="About Mohamed Gbla"
            className="max-w-xs object-cover rounded"
          />
        </div>

        {/* RIGHT SIDE (TEXT CONTENT) */}
        <div className="md:w-1/2 text-center md:text-left md:m-4">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-green-500">Professional</span> Web Developer
          </h2>

          <p className=" text-slate-300 mb-6 leading-relaxed">
            I am a passionate Software Developer with a background in Computer Science.
            I specialize in building modern, scalable web applications using React,
            Node.js, and clean architecture principles.
          </p>

          <p className=" text-slate-300 mb-8 leading-relaxed">
            I enjoy solving real-world problems, improving system security,
            and creating user-friendly digital experiences that deliver impact.
          </p>


           <a
            href="/cv.pdf"
            download
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 inline-block"
            >
            Download My CV
          </a>


          {/* ✅ Correct Button */}
          {/* <a
            href="#cv"
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 inline-block"
          >
            My CV
          </a> */}

        </div>
      </div>
    </section>
  );
}