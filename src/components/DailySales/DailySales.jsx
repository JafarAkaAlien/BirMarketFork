import React, { useEffect, useRef, useState, useInterval } from 'react'
import CardFactory from '../CardFactory/CardFactory'
import "./DailySales.css"
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const DailySales = () => {


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
        <div className=' w-full gap-15 flex items-center flex-col '>
            <div className='flex gap-5 w-full basliq'>
                <h2 className='inline text-3xl font-bold self-start tracking-[1px]'>Gunun Endirimi</h2>
                <div className="ml-0 mt-2 text-[13px] py-3 sm:mt-0 sm:text-[16px] leading-normal sm:py-3.5 px-3 text-white bg-[#ff429a] rounded-sm inline-flex w-full sm:max-w-[320px]">Kompaniyanin bitme muddeti: 14:12:{timer}</div>

            </div>
            <CardFactory />
        </div>
    )
}

export default DailySales