import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaServicestack } from "react-icons/fa";
import { MdContactMail, MdMenu, MdClose } from "react-icons/md";
import serviceimage from '../images/back.png'
import { MdDashboard } from "react-icons/md"; // Material Design Dashboard Icon


const ServicePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Our Services</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200 flex items-center">
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link to="/service" className="hover:text-gray-200 flex items-center">
              <FaServicestack className="mr-2" />
              Services
            </Link>
            <Link to="/contact" className="hover:text-gray-200 flex items-center">
              <MdContactMail className="mr-2" />
              Contact
            </Link>

            <Link
             to="/dashboard"
              className="hover:text-gray-200 flex items-center"
              >
              <MdDashboard className="mr-2" size={20} /> 
              Dashboard
          </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={toggleNav}
            className="block md:hidden text-white focus:outline-none"
          >
            {isNavOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isNavOpen && (
          <nav className="md:hidden bg-blue-700 text-white p-4">
            <Link
              to="/"
              className="block py-2 hover:bg-blue-800 rounded flex items-center"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link
              to="/service"
              className="block py-2 hover:bg-blue-800 rounded flex items-center"
            >
              <FaServicestack className="mr-2" />
              Services
            </Link>
            <Link
              to="/contact"
              className="block py-2 hover:bg-blue-800 rounded flex items-center"
            >
              <MdContactMail className="mr-2" />
              Contact
            </Link>


          <Link
             to="/dashboard"
              className="block py-2.5  rounded hover:bg-blue-700 hover:text-white transition duration-200 flex items-center"
              >
              <MdDashboard className="mr-2" size={20} /> 
               Dashboard
          </Link>


          </nav>
        )}
      </header>

      {/* Service Cards */}
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card 1 */}
       <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
       <div className="w-full overflow-hidden rounded-t-lg">
      <img src={serviceimage} alt="Service"
        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto mx-auto object-cover rounded shadow-lg"/>
      </div>
      <div className="mt-4">
         <p className="mt-2 text-gray-600 font-bold text-center">Bag</p>
         <p className="mt-2 text-gray-600 font-bold text-center">Tsh 12000/=</p>
      <div className="flex justify-center items-center">

       <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
         add
       </button>
      </div>
      </div>
      </div>


            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
       <div className="w-full overflow-hidden rounded-t-lg">
      <img src={serviceimage} alt="Service"
        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto mx-auto object-cover rounded shadow-lg"/>
      </div>
      <div className="mt-4">
         <p className="mt-2 text-gray-600 font-bold text-center">Bag</p>
         <p className="mt-2 text-gray-600 font-bold text-center">Tsh 12000/=</p>
      <div className="flex justify-center items-center">

       <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
         Add
       </button>
      </div>
      </div>
      </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
       <div className="w-full overflow-hidden rounded-t-lg">
      <img src={serviceimage} alt="Service"
        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto mx-auto object-cover rounded shadow-lg"/>
      </div>
      <div className="mt-4">
         <p className="mt-2 text-gray-600 font-bold text-center">Bag</p>
         <p className="mt-2 text-gray-600 font-bold text-center">Tsh 12000/=</p>
      <div className="flex justify-center items-center">

       <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
         Add
       </button>
      </div>
      </div>
      </div>


          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicePage;
