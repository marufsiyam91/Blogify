import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <div className="mt-[90px] min-h-[100vh] bg-[#BBD6FD] dark:bg-[#2C2F31]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
