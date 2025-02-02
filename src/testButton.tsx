"use client"; // src/testButton.tsx
import React from "react";
import "../themes.css"; // 

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const testButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default testButton;
