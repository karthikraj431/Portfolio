export default function About() {
  return (
    <section className="relative z-10 pt-28 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      {/* Intro */}
      <p className="text-gray-400 leading-relaxed mb-8">
        I am a motivated and detail-oriented Computer Science graduate with
        strong expertise in full-stack web development. I specialize in
        building scalable and responsive applications using the MERN stack,
        with additional experience in backend development using Django and
        MySQL. I enjoy solving real-world problems through clean,
        maintainable code and continuously improving my technical skills.
      </p>

      {/* Personal Info */}
      <div className="bg-gray-900 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

        <ul className="space-y-2 text-gray-400">
          <li>
            <span className="text-white font-medium">Name:</span> Karthik Raj P P
          </li>
          <li>
            <span className="text-white font-medium">Location:</span> Kozhikode, Kerala, India
          </li>
          <li>
            <span className="text-white font-medium">Email:</span> jankarthik6@gmail.com
          </li>
          <li>
            <span className="text-white font-medium">Phone:</span> +91 7907806476
          </li>
          <li>
            <span className="text-white font-medium">Languages:</span> English, Malayalam, Hindi, Tamil
          </li>
        </ul>
      </div>

      {/* Qualifications */}
      <div className="bg-gray-900 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Qualifications</h3>

        <div className="space-y-5">
          <div>
            <h4 className="text-lg font-medium">
              Master of Computer Application (MCA)
            </h4>
            <p className="text-gray-400">
              Centre for Computer Science & Information Technology Vadakara<br />
              Calicut University (2023 – 2025)
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium">
              B.Sc Computer Science
            </h4>
            <p className="text-gray-400">
              RSM SNDP Yogam Arts & Science College, Koyilandy<br />
              Calicut University (2020 – 2023)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
