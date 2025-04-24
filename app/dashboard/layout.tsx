'use client'
import { useState } from "react";
import Sidebar from "../Sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isHide, setIsHide] = useState(false);

    return (
        <> 
         <div className="d flex">
          <Sidebar/>
         

          <div className="d flex flex-col w-full justify-between">
            <div className="h-[60px] bg-[#077A7D] d flex justify-center items-center text-white text-2xl">Appbar</div>
            <div> {children}</div>
            <div className="w-full h-[60px] bg-[#077A7D] d flex justify-center items-center text-white text-2xl">Footer</div>
          </div>

        </div>
         
        </>
    );
}
