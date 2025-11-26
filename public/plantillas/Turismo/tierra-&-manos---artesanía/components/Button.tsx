import React from 'react';
import { ButtonVariant } from '../types';

export { ButtonVariant };

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = ButtonVariant.PRIMARY, 
  fullWidth = false, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    [ButtonVariant.PRIMARY]: "border-transparent text-white bg-earth-700 hover:bg-earth-800 focus:ring-earth-500 shadow-md hover:shadow-lg",
    [ButtonVariant.SECONDARY]: "border-transparent text-earth-900 bg-earth-200 hover:bg-earth-300 focus:ring-earth-400",
    [ButtonVariant.OUTLINE]: "border-earth-700 text-earth-700 bg-transparent hover:bg-earth-50 focus:ring-earth-500",
    [ButtonVariant.GHOST]: "border-transparent text-earth-700 hover:bg-earth-100 hover:text-earth-900",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;