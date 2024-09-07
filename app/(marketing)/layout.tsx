import React from "react";
import Navbar from "../_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen dark:bg-[#1f1f1f]">
        <Navbar/>
      <div className="h-full  pt-40">{children}</div>
    </main>
  );
};

export default MarketingLayout;
