
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
