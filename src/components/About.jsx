
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import pic from '../assets/profile-image.png'

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-20 px-6 md:px-20 py-16 bg-white">
      <div className="relative w-64 h-80 md:w-80 md:h-96">
        <img
          src={pic}
          alt="About Me"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-gray-900">ABOUT ME</h2>
          <p className="text-pink-600 font-semibold mt-2">Abdur Rahman Zubayer - Web Developer</p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            I am a passionate web developer, dedicated to building scalable and modern web applications.
            With a strong foundation in frontend and backend technologies, I focus on creating
            intuitive user experiences and efficient solutions.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-gray-700">
            <a href="#" className="hover:text-pink-500 text-2xl"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500 text-2xl"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-500 text-2xl"><FaLinkedin /></a>
          </div>
        </div>
    </div>
  );
}
