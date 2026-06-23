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
            ? "bg-white/80 backdrop-blur-md border-slate-200"
            : "bg-white border-slate-200 shadow-xs",
          hoverEffect && "hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1",
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
