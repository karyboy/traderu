import React from 'react';
import logoImage from '../assets/logo.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "w-16 h-16", showText = true }: LogoProps) {
  return (
    <div className="flex items-center">
      <img
        src={logoImage}
        alt="TradeNetAI Logo"
        className={className}
      />
      {showText && (
        <span className="text-4xl font-bold ml-2">
          <span className="text-white">TradeNet</span>
          <span className="text-purple-500">AI</span>
        </span>
      )}
    </div>
  );
} 