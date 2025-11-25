import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div 
      className={`
        glass-panel rounded-2xl overflow-hidden p-6
        ${hoverEffect ? 'hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};