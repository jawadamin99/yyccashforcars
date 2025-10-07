import React from "react";

export default function Breadcrumb({ name }) {
  return (
    <div className="w-full py-32 bg-gradient-to-r from-primary to-secondary">
      <h2 className="text-4xl lg:text-5xl text-white font-bold text-center capitalize">
        {name}
      </h2>
    </div>
  );
}
