import React from "react";
import Navbar from "../components/Navbar/navbar";
import Sidebar from "../components/Sidebar/sidebar";

export default function Wrapper({ children }) {
  return (
    <>
      <div className="flex w-full min-h-screen bg-[#FAFAFA]">
        {/* Sidebar */}
        <div className="w-[5%]">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="wrapper flex flex-col flex-grow p-8 gap-9">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}
