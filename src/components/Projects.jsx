import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Projects
      </h2>

      <p className="text-md font-semibold text-center mb-12">
        <span className="text-green-500">
          Just click live and you are in the project
        </span>
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-indigo-100 dark:bg-green-500 dark:text-white rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Live Button */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-center bg-white hover:bg-green-700 text-black font-medium px-5 py-2 rounded-lg transition duration-300"
                >
                  View Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;





// import { projects } from "../data/projects";

// function Projects() {
//   return (
//     <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
//         Projects 
//       </h2>
//       <p className="text-md md:text-md font-semibold text-center mb-12 ">
//         <spin className="text-green-500">Just a just click live and you are in the project</spin> </p>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

//             <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-4">
//                 {project.title}
//               </h3>
//               <p className="text-slate-600 dark:text-slate-400 mb-6">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((item, i) => (
//                   <span key={i} className="text-sm px-3 py-1 bg-indigo-100 dark:bg-green-500 dark:text-white rounded-full">
//                     {item}
//                   </span>
//                 ))}
//               </div>

//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;