import React from "react";

interface IProps {
  children: React.ReactNode;
}
const TTodosWrapper: React.FC<IProps> = ({ children }) => {
  return <div className="w-96 shadow-lg sm:w-[450px]">{children}</div>;
};

export default TTodosWrapper;
