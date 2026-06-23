import React from "react";
import { cn } from "../../utils/cn";

export const InputField = React.forwardRef(
  ({ className, label, error, type = "text", ...props }, ref) => {
    return (
      <div className={cn("flex flex-col w-full gap-1.5", className)}>
        {label && (
          <label className="text-sm font-medium text-slate-300">
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          className={cn(
            "w-full px-4 py-2 text-sm bg-slate-900 border rounded-lg text-slate-100 transition-all duration-300",
            "border-slate-800 placeholder-slate-500",
            "focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",
            "disabled:opacity-50 disabled:pointer-events-none",
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

InputField.displayName = "InputField";
