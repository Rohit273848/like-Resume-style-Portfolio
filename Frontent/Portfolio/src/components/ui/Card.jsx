import React from "react";
import { cn } from "../../utils/cn";

export const Card = React.forwardRef(
  ({ className, hoverEffect = true, glass = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border p-6 transition-all duration-300",
          glass
            ? "bg-slate-900/60 backdrop-blur-md border-slate-800"
            : "bg-slate-900 border-slate-800",
          hoverEffect && "hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
