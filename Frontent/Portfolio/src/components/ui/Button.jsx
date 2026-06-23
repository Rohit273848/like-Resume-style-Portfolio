import React from "react";
import { cn } from "../../utils/cn";

export const Button = React.forwardRef(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-0.5 active:translate-y-0";
    
    const variants = {
      primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg shadow-blue-600/10",
      secondary: "bg-slate-800 hover:bg-slate-900 text-slate-100",
      outline: "bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600",
      ghost: "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900"
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
