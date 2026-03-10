import React, { useEffect, useRef, useState, useInterval } from 'react'
import CardFactory from '../CardFactory/CardFactory'
import "./DailySales.css"
import { useGetProductsQuery } from '../../services/api'
import Timer from '../Timer/Timer'

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const DailySales = () => {











    return (
        <div className=' w-full gap-15 flex items-center flex-col '>
            <div className='flex gap-5 w-full basliq'>
                <h2 className='inline text-3xl font-bold self-start tracking-[1px]'>Gunun Endirimi</h2>
                <Timer/>
            </div>
            <CardFactory data={"daily"}/>
        </div>
    )
}

export default DailySales