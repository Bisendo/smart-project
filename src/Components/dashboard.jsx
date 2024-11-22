import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import { MdContactMail, MdExitToApp, MdNotifications } from "react-icons/md";
import serviceImage from "../images/image7.jpg";
import aboutImage from "../images/about.jpg";
import contactImage from "../images/image3.jpg";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-blue-500">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 w-64 bg-blue-500 text-black flex-shrink-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 z-20`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white mb-4">UzaNow</h1>
        </div>
        <nav className="space-y-2 ">
          <Link
            to="/"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition text-white duration-200 flex items-center"
          >
            <FaHome className="mr-2" />
            Home
          </Link>

          <Link
            to="/service"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition text-white duration-200 flex items-center"
          >
            <FaServicestack className="mr-2" />
            Service
          </Link>

          <Link
            to="/aboutus"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white text-white transition duration-200 flex items-center"
          >
            <MdContactMail className="mr-2 hover:text-black" size={20} />
            About Us
          </Link>

          <Link
            to="/login"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white text-white transition duration-200 flex items-center"
          >
            <MdExitToApp className="mr-2 hover:text-white" size={20} />
            Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white relative">
        {/* Navbar */}
        <header className="bg-blue-500 shadow flex justify-between items-center px-4 py-4">
          {/* Toggle button for mobile */}
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-400 md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo and notification for mobile */}
          <div className="flex items-center   space-x-4">
            <MdNotifications
              size={24}
              className="text-white md:hidden cursor-pointer"
            />
          </div>

          {/* Notification for desktop */}
          <MdNotifications
            size={24}
            className="text-white hidden md:block cursor-pointer"
          />
        </header>

        {/* Content */}
        <div className="p-4 sm:p-6 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Our Services</h3>
              <img
                src={serviceImage}
                alt="Our Services"
                className="mt-4 w-full rounded"
              />
              <p className="mt-4 text-blue-600">
                <Link
                  to="/service"
                  className="bg-blue-600 text-white px-4 p-2 hover:bg-sky-700 rounded"
                >
                  Service
                </Link>
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold">About Us</h3>
              <img
                src={aboutImage}
                alt="About Us"
                className="mt-4 w-full rounded"
              />
              <p className="mt-4 text-blue-600">
                <Link
                  to="/service"
                  className="bg-blue-600 text-white px-4 p-2 hover:bg-sky-700 rounded"
                >
                  About us
                </Link>
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Contact</h3>
              <img
                src={contactImage}
                alt="Contact"
                className="mt-4 w-full rounded"
              />
              <p className="mt-4 text-blue-600">
                <Link
                  to="/service"
                  className="bg-blue-600 text-white px-4 p-2 hover:bg-sky-700 rounded"
                >
                  Contact
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Overlay for Sidebar (Mobile Only) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Dashboard;
