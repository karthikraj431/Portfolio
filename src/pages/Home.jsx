import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 px-6 max-w-6xl mx-auto">
      
      {/* Text */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Karthik Raj
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
         Junior Web Developer | MERN Stack | Full Stack Developer
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <img
          src="/Karthik img.jpg"
          alt="Karthik Raj"
          className="w-64 md:w-80 rounded-full border-4 border-blue-600"
        />
      </motion.div>
    </section>
  );
}
