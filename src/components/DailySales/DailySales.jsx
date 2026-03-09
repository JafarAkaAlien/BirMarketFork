import React, { useEffect, useRef, useState } from 'react'

const DailySales = () => {


    const [timer, setTimer] = useState(59)

    


    setInterval(() => {
        setTimer(timer - 1)
    }, 1000)


    return (
        <div className='w-[90%] mx-auto my- h-screen'>
            <h2 className='inline text-3xl font-bold tracking-[1px] mr-2'>Gunun Endirimi</h2>
            <div className="ml-0 mt-2 text-[13px] py-[12px] sm:mt-0 sm:text-[16px] leading-[1.5] sm:py-[14px] px-[12px] text-white bg-[#ff429a] rounded-[4px] inline-flex w-full sm:max-w-[320px]">Kompaniyanin bitme muddeti: 14:12:{timer}</div>
        </div>
    )
}

export default DailySales