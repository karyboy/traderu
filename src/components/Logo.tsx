import React from 'react';
import logoImage from '../assets/logo.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "w-12 h-12", showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logoImage}
        alt="TradeNetAI Logo"
        className={`${className} object-contain`}
      />
      {showText && (
        <span className="text-2xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">TradeNet</span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AI</span>
        </span>
      )}
    </div>
  );
}