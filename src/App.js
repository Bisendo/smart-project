import React from "react";
import { Routes,Route,} from 'react-router-dom';
import Dashboard from "./Components/dashboard";
import LoginPage from "./Components/login";
import HomePage from "./Components/home";
import RegisterPage from "./Components/register";
import ServicePage from "./Components/service";
function App() {
  return (
    <div className="bg-gray-200 min-h-screen min-w-full">
      <header className="">
      </header>
       
        <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/service" element={<ServicePage />} />


      
     </Routes>  
      </div>
  );
} 

export default App;
