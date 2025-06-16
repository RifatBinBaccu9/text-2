"use client";
import {  createContext, useContext, useState } from "react";
const MyContext = createContext();
export const MyProvider = ({ children }) => {
  const [sitebar, setSitebar] = useState(null);
  return (
    <MyContext.Provider value={{ sitebar, setSitebar }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
