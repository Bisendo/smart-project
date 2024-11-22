import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdContactMail, MdExitToApp, MdDashboard, MdBuild } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Social media icons
import aboutUsImage from "../images/about.jpg"; // Replace with a relevant image

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-blue-500">
      {/* Navbar */}
      <header className="bg-blue-500 shadow flex justify-between items-center px-4 py-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white">UzaNow</h1>
        </div>

        {/* Navbar Links with only icons */}
        <nav className="flex space-x-4">
          <Link to="/" className="text-white hover:bg-blue-700 p-2 rounded transition">
            <FaHome size={24} />
          </Link>

          <Link to="/service" className="text-white hover:bg-blue-700 p-2 rounded transition">
            <MdBuild size={24} className="text-white" />
          </Link>

          <Link to="/aboutus" className="text-white hover:bg-blue-700 p-2 rounded transition">
            <MdContactMail size={24} />
          </Link>

          <Link to="/dashboard" className="text-white hover:bg-blue-700 p-2 rounded transition">
            <MdDashboard size={24} />
          </Link>

          <Link to="/login" className="text-white hover:bg-blue-700 p-2 rounded transition">
            <MdExitToApp size={24} />
          </Link>
        </nav>
      </header>

      {/* About Us Content */}
      <main className="bg-white p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">Our Mission</h2>
            <p className="text-black text-lg">
              At UzaNow, our mission is to connect buyers and sellers through a user-friendly platform
              that fosters trust and provides exceptional service. We aim to offer an innovative way for individuals to
              purchase quality items easily and efficiently, supporting local businesses and entrepreneurs.
            </p>
          </div>

          <div className="bg-blue-100 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">Our Vision</h2>
            <p className="text-black text-lg">
              Our vision is to become the leading online marketplace for local and international products, making
              buying and selling simple, secure, and accessible to everyone. We strive to create a thriving community
              of buyers and sellers that supports growth, opportunity, and a positive shopping experience.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-blue-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">About Us</h2>
          <div className="flex justify-center">
            <img
              src={aboutUsImage}
              alt="About Us"
              className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto mx-auto object-cover rounded shadow-lg"
            />
          </div>
          <p className="text-black text-lg mt-6">
            Founded in 2024, UzaNow is committed to revolutionizing the way products are bought and sold. We provide
            a seamless, secure, and efficient platform for sellers to reach a wider audience and buyers to enjoy
            quality products at affordable prices.
          </p>
          <p className="text-black text-lg mt-4">
            We are passionate about empowering entrepreneurs and providing our customers with excellent service and
            a great online shopping experience.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-6 mt-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">
            <p>&copy; 2024 UzaNow. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            {/* Social Media Icons */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
