// function Services() {
//   const services = [
//     {
//       title: "Web Design",
//       description:
//         "Designing responsive and modern websites focused on performance, usability, and clean UI.",
//       icon: "💻",
//       highlight: true,
//     },
//     {
//       title: "UI / UX Design",
//       description:
//         "Creating intuitive user interfaces and seamless user experiences with modern design principles.",
//       icon: "🎨",
//       highlight: false,
//     },
//     {
//       title: "Web Developer",
//       description:
//         "Building responsive and modern systems focused on performance, usability, and clean UI.",
//       icon: " ",
//       highlight: true,
//     },
//     {
//       title: "Mobile Developer",
//       description:
//         "Building responsive and Mobile Apps with React native focused on performance, usability, and clean UI",
//       icon: " ",
//       highlight: true,
//     },
//   ];

//   return (
//     <section id="services" className="bg-slate-900 dark:bg-slate-950 text-white py-24">
//       <div className="max-w-6xl mx-auto px-6 text-center">
        
//         {/* Section Title */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-2">
//           MY<span className="text-green-500">SERVICES</span>
//         </h2>
//         <p className="text-slate-400 mb-16">
//           What I can help you with
//         </p>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`p-8 rounded-xl transition duration-300 shadow-md hover:shadow-xl
//                 ${
//                   service.highlight
//                     ? "bg-green-950"
//                     : "bg-slate-800"
//                 }`}
//             >
//               {/* Icon */}
//               <div
//                 className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full text-2xl
//                   ${
//                     service.highlight
//                       ? "bg-white text-slate-900"
//                       : "bg-green-500 text-white"
//                   }`}
//               >
//                 {service.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold mb-4">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p
//                 className={`mb-6 leading-relaxed
//                   ${
//                     service.highlight
//                       ? "text-green-300"
//                       : "text-slate-300"
//                   }`}
//               >
//                 {service.description}
//               </p>

//               {/* Button */}
//               <button
//                 className={`px-6 py-2 rounded-lg transition duration-300
//                   ${
//                     service.highlight
//                       ? "bg-white text-slate-900 hover:bg-green-500 hover:text-white"
//                       : "bg-green-500 hover:bg-green-600"
//                   }`}
//               >
//                 Learn More
//               </button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Services;


import {
  Monitor,
  Palette,
  Code,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Web Design",
      description:
        "Designing responsive and modern websites focused on performance, usability, and clean UI.",
      icon: <Monitor size={28} />,
      highlight: false,
    },
    {
      title: "UI / UX Design",
      description:
        "Creating intuitive user interfaces and seamless user experiences with modern design principles.",
      icon: <Palette size={28} />,
      highlight: false,
    },
    {
      title: "Web Developer",
      description:
        "Building responsive and modern systems focused on performance, usability, and clean UI.",
      icon: <Code size={28} />,
      highlight: false,
    },
    {
      title: "Mobile Developer",
      description:
        "Building responsive mobile apps with React Native focused on performance, usability, and clean UI.",
      icon: <Smartphone size={28} />,
      highlight: false,
    },
  ];

  return (
    <section
      id="services"
      className="bg-slate-900 dark:bg-slate-950 text-white py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          MY<span className="text-green-500"> SERVICES</span>
        </h2>
        <p className="text-slate-400 mb-16">
          What I can help you with
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl transition duration-300 shadow-md hover:shadow-xl
                ${
                  service.highlight
                    ? "bg-green-950"
                    : "bg-slate-800"
                }`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full text-2xl
                  ${
                    service.highlight
                      ? "bg-white text-slate-900"
                      : "bg-green-500 text-white"
                  }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`mb-6 leading-relaxed
                  ${
                    service.highlight
                      ? "text-green-300"
                      : "text-slate-300"
                  }`}
              >
                {service.description}
              </p>

              {/* Button */}
              <button
                className={`px-6 py-2 rounded-lg transition duration-300
                  ${
                    service.highlight
                      ? "bg-white text-slate-900 hover:bg-green-500 hover:text-white"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;