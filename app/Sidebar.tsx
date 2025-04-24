'use client';
import { useState } from "react";

export default function Sidebar() {
  const [width, setWidth] = useState('300px');

  const handleWidth = () => {
    setWidth(prev => (prev === '300px' ? '90px' : '300px'));
  };

  return (
    <>
      <div
        className="h-screen bg-[#077A7D] flex justify-end pt-4 text-white text-lg transition-all duration-300 ease-in-out overflow-hidden"
        style={{ width }}
      >
        <span className="cursor-pointer p-2" onClick={handleWidth}>
          Collapse
        </span>
      </div>
    </>
  );
}
