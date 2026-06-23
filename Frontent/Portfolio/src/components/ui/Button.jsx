import React from "react";
import { cn } from "../../utils/cn";

export const Button = React.forwardRef(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-0.5 active:translate-y-0";
    
    const variants = {
      primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg shadow-indigo-600/20",
      secondary: "bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 hover:border-slate-600",
      outline: "bg-transparent border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white text-indigo-400",
      ghost: "bg-transparent hover:bg-slate-800 text-slate-400 hover:text-white"
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
