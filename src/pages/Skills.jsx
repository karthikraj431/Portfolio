export default function Skills() {
  return (
    <section className="relative z-10 pt-28 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Programming</h3>
          <p className="text-gray-400">Python</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Frontend</h3>
          <p className="text-gray-400">
            HTML, CSS, React.js, Tailwind CSS, Bootstrap
          </p>
        </div>

        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Backend</h3>
          <p className="text-gray-400">Node.js, Django</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Database</h3>
          <p className="text-gray-400">MongoDB, MySQL</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Tools</h3>
          <p className="text-gray-400">
            VS Code, PyCharm, GitHub
          </p>
        </div>
      </div>
    </section>
  );
}
