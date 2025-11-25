import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`
      bg-space-900/50 backdrop-blur-sm border border-space-800 rounded-2xl overflow-hidden
      ${hoverEffect ? 'hover:border-space-accent/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;