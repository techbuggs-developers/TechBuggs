import React from "react";
import type { ButtonProps } from "../../types/button";

const baseStyles =
  "transition-colors font-semibold rounded-full shadow-2xl  disabled:opacity-50 cursor-pointer";

const variantStyles: Record<string, string> = {
  primary:
    "bg-[#0755E9] text-white hover:bg-white hover:text-[#0755E9] border border-[#0755E9]",
  secondary:
    "bg-[#78BA9F] text-[#78BA9F] border border-[#78BA9F] hover:bg-black hover:text-white hover:border-black",
  outline:
    "bg-white border-[3px] border-[#78BA9F] text-[#78BA9F] hover:bg-black hover:text-white hover:border-black",
  ghost:
    "bg-transparent text-[#08162C] hover:text-[#45BCA0]",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = "primary", className = "", ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant] || ""} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button"; 