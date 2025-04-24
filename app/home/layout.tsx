'use client'
import { useState } from "react";


export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isHide, setIsHide] = useState(false);

    return (
        <> 
          <div> {children}</div>
         
        </>
    );
}
