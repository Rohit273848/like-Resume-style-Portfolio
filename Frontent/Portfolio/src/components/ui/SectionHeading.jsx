import React from "react";
import { cn } from "../../utils/cn";

export const SectionHeading = React.forwardRef(
  ({ className, title, subtitle, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mb-12", className)} {...props}>
        {subtitle && (
          <span className="text-xs font-semibold tracking-wider text-indigo-500 uppercase block mb-2">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl relative inline-block group">
          {title}
          <span className="absolute bottom-[-6px] left-0 w-12 h-1 bg-indigo-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </h2>
        {children && <div className="mt-4 text-slate-400 max-w-2xl">{children}</div>}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";
