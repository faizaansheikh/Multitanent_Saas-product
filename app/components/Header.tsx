import React from 'react'
import Button from './Button'

function Header(props:any) {
    const{actions,title} = props
   
    return (
        <div className='flex justify-between items-center w-full h-[60px] border border-2 rounded-[5px] mb-6'>
            <div className='font-[600] text-2xl mx-4'>{title}</div>
            <div className='flex'>
                {actions && actions.map((x: any, i: any) => (

          
                        <Button key={i} label={x.label} click={x.click}/>
                
                ))}
            </div>
        </div>
    )
}

export default Header