import React from "react";
import { cn } from "../../utils/cn";

export const PlusNode = ({ className }) => {
  return (
    <div 
      className={cn(
        "absolute text-slate-300 font-mono text-xs select-none pointer-events-none -translate-x-1/2 -translate-y-1/2 z-20",
        className
      )}
    >
      +
    </div>
  );
};

export default PlusNode;
