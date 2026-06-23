import React from "react";
import { cn } from "../../utils/cn";

export const Badge = React.forwardRef(
  ({ className, variant = "default", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold select-none border transition-all duration-300";
    
    const variants = {
      default: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/20",
      secondary: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20",
      outline: "bg-transparent text-slate-300 border-slate-700 hover:border-indigo-500/30",
      accent: "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20"
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
