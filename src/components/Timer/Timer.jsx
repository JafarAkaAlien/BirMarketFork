import React, { useState } from 'react'

const Timer = () => {


    const [timer, setTimer] = useState(59)


    setTimeout(() => {
        if (timer == 0) {
            // console.log("hola");¬

            setTimer(59)
        }
        else {
            setTimer(timer - 1)
        }

    }, 1000)



    return (
        <div className="ml-0 mt-2 text-[13px] py-3 sm:mt-0 sm:text-[16px] leading-normal sm:py-3.5 px-3 text-white bg-[#ff429a] rounded-sm inline-flex w-full sm:max-w-[320px]">Kompaniyanin bitme muddeti: 14:12:{timer}</div>

    )
}

export default Timer