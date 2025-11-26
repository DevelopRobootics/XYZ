import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center = true }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="block text-earth-600 font-bold text-xs uppercase tracking-[0.2em] mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 relative inline-block">
        {title}
        {center && (
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-earth-300 rounded-full"></span>
        )}
      </h2>
    </div>
  );
};

export default SectionTitle;