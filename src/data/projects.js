import miskul from "../assets/miskul.png";
import link from "../assets/link.png";
import todo from "../assets/todo.jpg";
import lamlic from "../assets/lamlic.jpg";

export const projects = [
  {
    title: "Miskul",
    image: miskul,
    description:
      "A MERN stack web-based application with authentication and CRUD functionality. Built for student with features like: GPA Calculator,study-sessions,work-paper and note book.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://www.miskul.com/",
  },
  {
    title: "Unimak-Link",
    image: "/link.png",
    description:
      "A student management system built MERN Stack for student at Unimak allowing student to view result, announcement and attendance, staffs to mark,view attendance, apply for leave and view announcement ,Admin for managing students and staffs to post jobs and candidates to apply.",
    tech: ["NODE.JS", "REACT.JS", "POSTGRESQL"],
    image: link,
    live: "https://unimak-link.onrender.com/",
  },
  {
    title: "To Do Mobile App",
    image: "/todo.png",
    description:
      "Implemented with react native, it includes application with authentication and CRUD functionality. NOT YET DEPLOYED",
    tech: ["NODE", "MONGODB", "REACT NATIVE"],
    image: todo,
    live: "#",
  },
  {
    title: "Lam-Leck Mobile App",
    image: "/lamlic.png",
    description:
      "Implemented with react native, it includes application with authentication and CRUD functionality.Built for Islamic Local lecture COMING SOON",
    tech: ["NODE", "MONGODB", "REACT NATIVE"],
    image: lamlic,
    live: "#",
  },
];