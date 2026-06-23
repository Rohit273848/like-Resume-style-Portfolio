import React from "react";
import { cn } from "../../utils/cn";

export const Badge = React.forwardRef(
  ({ className, variant = "default", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold select-none border transition-all duration-300";
    
    const variants = {
      default: "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100",
      secondary: "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100",
      outline: "bg-transparent text-slate-600 border-slate-200 hover:border-blue-400/50 hover:text-blue-600",
      accent: "bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100"
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
