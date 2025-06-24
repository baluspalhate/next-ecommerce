import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Navbar />
      <div className="py-20">{children}</div>
    </div>
  );
};

export default Layout;
