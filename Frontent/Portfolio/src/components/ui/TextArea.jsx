import React from "react";
import { cn } from "../../utils/cn";

export const TextArea = React.forwardRef(
  ({ className, label, error, rows = 4, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col w-full gap-1.5", className)}>
        {label && (
          <label className="text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={cn(
            "w-full px-4 py-2 text-sm bg-white border rounded-lg text-slate-900 transition-all duration-300",
            "border-slate-200 placeholder-slate-400",
            "focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
            "disabled:opacity-50 disabled:pointer-events-none resize-none",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500"
          )}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
