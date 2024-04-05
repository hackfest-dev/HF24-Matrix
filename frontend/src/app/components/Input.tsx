import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export const Input: React.FC<InputProps> = ({ id, ...props }) => {
  return (
    <input
      id={id}
      className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-gray-200"
      {...props}
    />
  );
};