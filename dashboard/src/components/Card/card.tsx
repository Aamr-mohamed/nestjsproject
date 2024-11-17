import React from "react";

export default function Card({ children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-7 flex flex-col gap-3">
      {children}
    </div>
  );
}
