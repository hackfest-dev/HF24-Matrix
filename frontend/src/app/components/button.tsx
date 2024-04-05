// components/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"; // Define the variant prop
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  let className = "px-4 py-2 rounded-md focus:outline-none";
  
  // Add different classes based on the variant
  if (variant === "primary") {
    className += " bg-blue-500 text-white hover:bg-blue-600";
  } else if (variant === "secondary") {
    className += " bg-gray-500 text-white hover:bg-gray-600";
  } else if (variant === "outline") {
    className += " border border-black text-black hover:bg-gray-200";
  }

  return (
    <button className={className} {...props} />
  );
};
