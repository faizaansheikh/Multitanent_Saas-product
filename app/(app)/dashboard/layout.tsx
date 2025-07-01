


import Appbar1 from '@/app/components/Appbar1';
import React from 'react'

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Appbar1 children={children}/>
        
        </>
    )
}

export default layout