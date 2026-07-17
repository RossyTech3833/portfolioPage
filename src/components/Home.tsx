import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Navbar } from './Navbar';
import pics from '../assets/images/rossy1.png'
import { useNavigate } from "react-router-dom";

export function Home() {

  const Navigate = useNavigate()


  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/my cv.pdf'
    link.download = '/my cv.pdf'
    link.click()
  }

  const handleHireMe = () =>{
    Navigate('/HireMe')
  }




  return (
    <div className="flex justify-center p-4 sm:p-10 m-4 sm:m-10 bg-gray-900/90 rounded-2xl min-h-[800px] relative overflow-hidden">

      <Navbar />

      <div className="border border-gray-700 rounded-2xl w-full h-full flex flex-col lg:flex-row items-center px-6 sm:px-16 py-24 lg:py-0 gap-10 lg:gap-0">

        {/* Left content */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          <div>
            <p className="text-gray-400 text-lg mt-6">Hi I am</p>
            <h2 className="text-white text-2xl font-semibold">Rossy Rossy</h2>
          </div>

          <h1 className="text-orange-500 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            web developer
          </h1>

          <p className="w-full max-w-[520px] capitalize text-white">
            A motivated frontend developer with hands on experience bulding responsive, user friendly web
            applications using react js,typscript,tailwindcss, and many state management,RESTful API
            integration, and performance optimisation.  experienced in projects to production and
            continousely improving through personal and open source contributions
          </p>

          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/chinonso-rosemary-9b2579308?utm_source=share_via&utm_content=profile&utm_medium=member_andriod"
              className="border border-gray-600 p-2 rounded-md
             text-white hover:border-orange-500 hover:text-orange-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="border border-gray-600 p-2 rounded-md text-white 
            hover:border-orange-500 hover:text-orange-500 transition">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/RossyTech3833" className="border border-gray-600 p-2 rounded-md text-white 
            hover:border-orange-500 hover:text-orange-500 transition">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61587356030464" className="border border-gray-600 p-2 rounded-md text-white
             hover:border-orange-500 hover:text-orange-500 transition">
              <FaFacebookF />
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <a href="" onClick={handleHireMe} className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition">
              Hire Me
            </a>
            <button onClick={handleDownload} className="border cursor-pointer border-gray-500 hover:border-white
             text-white px-6 py-3 rounded-md font-medium transition">
              Download CV
            </button>
          </div>

          <div className="flex gap-6 sm:gap-10 mt-4 border border-gray-700 rounded-xl p-4 sm:p-6 w-fit bg-gray-800/40">
            <div>
              <p className="text-orange-500 text-xl font-bold">5+</p>
              <p className="text-gray-300 text-sm">Experience</p>
            </div>
            <div className="border-l border-gray-600 pl-6 sm:pl-10">
              <p className="text-orange-500 text-xl font-bold">20+</p>
              <p className="text-gray-300 text-sm">Project done</p>
            </div>
            <div className="border-l border-gray-600 pl-6 sm:pl-10">
              <p className="text-orange-500 text-xl font-bold">10+</p>
              <p className="text-gray-300 text-sm">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right image with circular backdrop */}
        <div className="flex-1 flex justify-center items-center relative h-[300px] sm:h-[400px] lg:h-full w-full">
          <div className="absolute w-[250px] h-[220px] sm:w-[400px] sm:h-[350px] bg-orange-500/10 rounded-full"></div>
          <img
            src={pics}
            alt="Profile"
            className="relative z-10 h-[280px] sm:h-[400px] lg:h-[550px] object-cover grayscale rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}