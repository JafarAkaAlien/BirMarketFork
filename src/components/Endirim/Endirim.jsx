import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
    faBagShopping,
    faLocationPin,
    faPercent,
    faShoppingCart,
    faStar,
    faTruckFast,
} from "@fortawesome/free-solid-svg-icons";




import "./Endirim.css"

const Endirim = () => {
    return (
        <div className="container w-full flex justify-center">
            <section className="flex flex-col gap-15 text-center w-[85%]">

                <section className="flex flex-col gap-5">
                    <div className="flex gap-5 self-start">
                        <h3 className="font-bold text-[32px]">60%-dək endirim!</h3>
                        <img
                            className="w-35"
                            src="https://birmarket.az/images/birmarket_logo.svg"
                        />
                    </div>

                    <div class="parent">
                        <div class="div1"></div>
                        <div class="div2"></div>
                        <div class="div3"></div>
                        <div class="div4"></div>
                        <div class="div5"></div>
                        <div class="div6"></div>
                        <div class="div7"></div>
                    </div>
                    <div class="parent2">
                        <div class="div8"></div>
                        <div class="div9"></div>
                        <div class="div10"></div>
                        <div class="div11"></div>
                        <div class="div12"></div>
                    </div>


                </section>



            </section>
        </div>


    )
}

export default Endirim