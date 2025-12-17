// /src/components/Logo.tsx
"use client"; // Client component since it may use props or interactivity

import React from "react";

interface LogoProps {
  className?: string;
  color?: 'default' | 'pro';
  fill?: string;
}

const Logo = ({ className = "", color = 'default', fill, ...props }: LogoProps) => {
  // Map color variants to actual color values
  const colorMap = {
    default: '#1A1A1A',
    pro: '#00A3FF'
  };
  
  // Use fill prop if provided, otherwise use color variant
  const fillColor = fill || colorMap[color];
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="290 200 250 200"
      className={className} // Apply Tailwind classes via prop
      {...props} // Spread additional props (e.g., width, height)
    >
      <g>
        <rect
          x="387.3"
          y="256.1"
          transform="matrix(0.7747 -0.6324 0.6324 0.7747 -97.6003 321.372)"
          fill={fillColor}
          width="29.7"
          height="83.1"
        />
        <rect
          x="453.8"
          y="273.5"
          transform="matrix(0.7747 -0.6324 0.6324 0.7747 -86.4737 364.8141)"
          fill={fillColor}
          width="29.7"
          height="60.6"
        />
        <rect x="342.6" y="301.5" fill={fillColor} width="29" height="30.6" />
      </g>
    </svg>
  );
};

export default Logo;