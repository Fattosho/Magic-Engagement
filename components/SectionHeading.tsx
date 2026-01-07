
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? 'text-center' : 'text-left'} px-4`}>
      <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter italic uppercase leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
