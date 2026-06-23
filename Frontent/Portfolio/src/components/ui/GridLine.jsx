import React from "react";
import { cn } from "../../utils/cn";

export const GridLine = ({ orientation = "vertical", className }) => {
  return (
    <div 
      className={cn(
        "absolute bg-slate-200 pointer-events-none z-10",
        orientation === "vertical" ? "w-[1px] h-full" : "h-[1px] w-full",
        className
      )}
    />
  );
};

export default GridLine;
