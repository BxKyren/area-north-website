
import React from "react";

export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={
        "bg-sky-500 hover:bg-sky-600 text-white font-medium transition " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
