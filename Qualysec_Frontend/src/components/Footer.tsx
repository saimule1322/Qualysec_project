// App.jsx
import { useEffect, useState } from "react";
import { FaCakeCandles, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className=" bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white font-sans">

      {/* Main Section */}
      <main className="p-5 md:p-10 flex flex-row ml-25 justify-between">
        <div className=" max-w-md ">
        <a href="/" className="text-2xl font-bold text-blue-600 ">
          <img src="https://qualysec.com/wp-content/uploads/2024/09/logo.svg" alt="Logo" className="h-10 w-auto" /> {/* Replace with your logo */}
        </a>
          <p className="text-base md:text-lg leading-relaxed">
            Qualysec is a leading cybersecurity firm specializing in comprehensive penetration testing and risk assessment services. Our tailored solutions help businesses proactively defend against evolving cyber threats.
          </p>
        </div>

          <div>
            <h3 className="text-xl font-semibold  border-[#00c4ff] pb-2 mb-4">Services</h3>
            <ul className="list-none p-0">
              <li className="mb-2">Web Application Pentesting</li>
              <li className="mb-2">Mobile App Pentesting</li>
              <li className="mb-2">Cloud Pentesting</li>
              <li className="mb-2">IOT Device Pentesting</li>
              <li className="mb-2">External Network Pentesting</li>
            </ul>
          </div>

          <div className="info">
            <h3 className="text-xl font-semibold  border-[#00c4ff] pb-2 mb-4">Information</h3>
            <ul className="list-none p-0">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Partnership</li>
              <li className="mb-2">Case Studies</li>
              <li className="mb-2">Blog</li>
            </ul>
          </div>

          <div >
            <h3 className="text-xl font-semibold  border-[#00c4ff] pb-2 mb-4">Social</h3>
            <div className="social-icons flex flex-col gap-4 text-xl">
              <FaLinkedin className="cursor-pointer hover:text-blue-500" />
              <FaYoutube className="cursor-pointer hover:text-red-500" />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaFacebook className="cursor-pointer hover:text-blue-600" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
            </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="p-5 md:p-10 flex flex-col md:flex-row justify-between ml-25 mr-4">
        <div className="get-in-touch">
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <p className="font-bold">For Business</p>
          <p>📞 +91 XXXXXXXXXX | 📧 sales@gmail.com</p>
          <p className="font-bold mt-4">For Careers</p>
          <p>📞 +91 XXXXXXXXXX |📧 hr@gmail.com</p>
        </div>

        <div className="visit">
          <h3 className="text-xl font-semibold mb-4">Take Visit</h3>
          <p className="font-bold">BHUBANESWAR</p>
          <p>302, 3rd Floor, NSIC-IMDC Dharampad Bhawan, Mancheswar Industrial Estate, Bhubaneswar-751010</p>
          <p className="font-bold mt-4">BENGALURU</p>
          <p>No: 72, OJone India, Service Rd, LRDE Layout, Doddanekundi, India, 560037</p>
        </div>
      </footer>


      {/* <div className="fixed bottom-5 right-5">
      <button
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    className="bg-gradient-to-r from-[#00c4ff] to-[#ff00ff] text-white p-3 rounded-full shadow-lg transition-all right-5"
    aria-label="Scroll to top"
  >
    ⬆
  </button>
        <button className="bg-gradient-to-r from-[#00c4ff] to-[#ff00ff] text-white px-4 py-2 rounded-full flex items-center gap-2">
          Chat with us
        </button>
      </div> */}

      <div className="fixed bottom-5 right-5 flex flex-col items-center gap-3 z-50">

      {showScrollTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="bg-gradient-to-r from-[#00c4ff] to-[#ff00ff] text-white p-3 rounded-full shadow-lg transition-all"
          aria-label="Scroll to top"
        >
          ⬆
        </button>
      )}

      <button className="bg-gradient-to-r from-[#00c4ff] to-[#ff00ff] text-white px-4 py-2 rounded-full flex items-center gap-2">
        Chat with us
      </button>

     
    </div>
    </div>
    
  );
}

export default Footer;