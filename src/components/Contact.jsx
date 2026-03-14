

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove error when user starts typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-white dark:bg-slate-950 text-black dark:text-white py-24"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Contact Me
        </h2>
        <p  className="text-md md:tex-sm font-regular text-center mb-8 text-green-500"> Let get in touch</p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 flex justify-center items-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Success / Error UI */}
        {status === "success" && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            Message sent successfully!
          </div>
        )}

        {status === "error" && (
          <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            Something went wrong. Please try again.
          </div>
        )}

        {/* Contact Info */}
        <div className="mt-10 text-center text-slate-600 dark:text-slate-400">
         
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/mohamedadgbla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              github.com/mohamedadgbla
            </a>
          </p>
            
             <p  className="text-green-500 hover:underline">Email: mohamedadgbla2000@gmail.com</p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/mohamed-a-d-gbla-522437315/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              linkedin.com/in/mohamed-a-d-gbla
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

// import { useState } from "react";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);

//     // Later: connect to backend or email service
//     alert("Message sent successfully!");

//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });
//   };

//   return (
//     <section
//       id="contact"
//       className="bg-white dark:bg-slate-950 text-black dark:text-white py-24"
//     >
//       <div className="max-w-4xl mx-auto px-6">

//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Contact Me
//         </h2>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">

//           {/* Name */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your name"
//               required
//               className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="your@email.com"
//               required
//               className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Message
//             </label>
//             <textarea
//               name="message"
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Write your message..."
//               required
//               className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
//             ></textarea>
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>

//         {/* Contact Info */}
//         <div className="mt-10 text-center text-slate-600 dark:text-slate-400">
//           <p>Email: mohamedadgbla2000@gmail.com</p>
//           <p>
//             GitHub:{" "}
//             <a
//               href="https://github.com/mohamedadgbla/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-green-500 hover:underline"
//             >
//               github.com/mohamedadgbla
//             </a>
//           </p>
//           <p>
//             LinkedIn:{" "}
//             <a
//               href="https://www.linkedin.com/in/mohamed-a-d-gbla-522437315/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-green-500 hover:underline"
//             >
//               linkedin.com/in/mohamed-a-d-gbla
//             </a>
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Contact;