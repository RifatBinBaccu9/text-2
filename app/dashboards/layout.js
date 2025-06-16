import React from "react";
import Header from "./commone/header";
import SiteBar from "./commone/siteBar";
import { MyProvider } from "../context/Context ";

const layout = ({ children }) => {
  return (
    <MyProvider>
      <div className="w-full h-full flex flex-row bg-[#1B2431]">
          <SiteBar />
        <div className="w-full">
          <Header />
          {children}
        </div>
      </div>
    </MyProvider>
  );
};

export default layout;
