import React, { useEffect, useState } from "react";
import HeroCard from "./../components/HeroCard";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [sidebarTop, setSidebarTop] = useState(0);

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar"); 
    const getSidebarPosition = () => {
      if (sidebar) {
        const rect = sidebar.getBoundingClientRect();
        setSidebarTop(rect.top);
      }
    };

    getSidebarPosition();

    window.addEventListener("scroll", getSidebarPosition);
    window.addEventListener("resize", getSidebarPosition);

    return () => {
      window.removeEventListener("scroll", getSidebarPosition);
      window.removeEventListener("resize", getSidebarPosition);
    };
  }, []);

  return (
    <div className="dark:text-[#CBC6C0] text-[#282b2c] mx-auto max-w-screen-xl px-4 py-6 min-h-screen">
      <h2 className="mb-6 text-3xl">Where Thoughts Meet Words.</h2>
      <div className="flex items-start justify-between gap-8">
            {/* <HeroCard /> */}
            <div className="flex flex-col gap-6">
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
            </div>
        <div
          className="sidebar sticky"
          style={{
            top: sidebarTop >= 0 ? `${sidebarTop}px` : "0",
          }}
        >
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
