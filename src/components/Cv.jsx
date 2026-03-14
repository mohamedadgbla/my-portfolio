export default function Cv() {
  return (
    <section
      id="cv"
      className="max-w-6xl mx-auto w-full px-6 py-24 bg-white text-slate-900"
    >
      <h2 className="text-3xl font-bold mb-6">
        My <span className="text-green-500">CV</span>
      </h2>

      <p className="mb-6">
        You can download my CV below.
      </p>

      <a
        href="/cv.pdf"
        download
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition inline-block"
      >
        Download CV
      </a>
    </section>
  );
}