import React from 'react';
interface ButtonProps {
  variant: "primary" | "outline" | "danger";
  state: "default" | "hover" | "pressed" | "disabled";
  text?: string;
}

export const ButtonDisplay: React.FC<ButtonProps> = ({ 
  variant = "primary",
  state = "default",
  text = "Button"
}) => {
  const getButtonClasses = () => {
    const baseClasses = "py-2 px-4 rounded-md text-sm font-medium transition-all";

    // Primary/blue buttons
    if (variant === "primary") {
      if (state === "default") return `${baseClasses} bg-btn-blue text-white`;
      if (state === "hover") return `${baseClasses} bg-btn-blue-hover text-white`;
      if (state === "pressed") return `${baseClasses} bg-btn-blue-pressed text-white`;
      if (state === "disabled") return `${baseClasses} bg-btn-blue-disabled text-btn-text-disabled cursor-not-allowed`;
    }

    // Outline/white buttons
    if (variant === "outline") {
      if (state === "default") return `${baseClasses} bg-transparent text-btn-blue border border-btn-blue`;
      if (state === "hover") return `${baseClasses} bg-transparent text-btn-blue-hover border border-btn-blue-hover`;
      if (state === "pressed") return `${baseClasses} bg-transparent text-btn-blue-pressed border border-btn-blue-pressed`;
      if (state === "disabled") return `${baseClasses} bg-btn-outline-disabled text-btn-text-disabled border border-btn-blue-disabled cursor-not-allowed`;
    }

    // Default to primary style
    return `${baseClasses} bg-btn-blue text-white`;
  };

  return (
    <button className={getButtonClasses()} disabled={state === "disabled"}>
      {text}
    </button>
  );
};