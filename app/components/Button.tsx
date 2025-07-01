import React from 'react'

function Button(props: any) {
    const { label,click } = props
    return (
        <div className='bg-[#001529]  mx-2 text-white text-[18px] px-4 py-2 rounded-[5px] cursor-pointer hover:bg-[#02386b]' onClick={click}>{label}</div>
    )
}

export default Button