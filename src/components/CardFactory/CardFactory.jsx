import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "./CardFactory.css"

import {
    faShoppingCart,
    faStar,
} from "@fortawesome/free-solid-svg-icons";

const products = [
    {
        id: 1,
        name: "Product A",
        image:
            "https://strgimgr.b-cdn.net/sized/280/681436-cf7f78bc5a961c20eba35258ede7e79d.jpg?width=280&height=280",
    },
    { id: 2, name: "Product B", image: "url" },
    { id: 3, name: "Product C", image: "url" },
    { id: 4, name: "Product D", image: "url" },
    { id: 5, name: "Product E", image: "url" },
    { id: 6, name: "Product F", image: "url" },
    { id: 7, name: "Product G", image: "url" },
    { id: 8, name: "Product H", image: "url" },
    { id: 9, name: "Product I", image: "url" },
    { id: 10, name: "Product J", image: "url" },
    { id: 12, name: "Product B", image: "url" },
    { id: 13, name: "Product C", image: "url" },
    { id: 14, name: "Product D", image: "url" },
    { id: 15, name: "Product E", image: "url" },
    { id: 16, name: "Product F", image: "url" },
].map((product) => ({
    ...product,
    discount: Math.floor(Math.random() * 100),
    price: Math.floor(30 + Math.random() * 50),
    oldPrice: Math.floor(60 + Math.random() * 100),
    months: 1 + Math.floor(Math.random() * 10),
}));

// Helper to split array into chunks of 5
const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

const CardFactory = () => {


    const productChunks = chunkArray(products, 1);

    return (
        <section className="flex flex-col gap-5">

     
                <Swiper
                    pagination={{ clickable: true }}
                    navigation={false}
                    modules={[Pagination, Navigation, FreeMode]}
                    breakpoints={{
                        0: {
                            slidesPerView: 2.2,
                            slidesPerGroup: 2,
                        },
                        640: {
                            slidesPerView: 3.2,
                            slidesPerGroup: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                            slidesPerGroup: 5,
                        },
                    }}
                    spaceBetween={16}
                    grabCursor={true}
                    freeMode={true}
                    className="max-w-7xl"
                >
                    {productChunks.map((chunk, index) => (
                        <SwiperSlide key={index}>
                            <div style={{ display: "flex", gap: "1rem" }}>
                                {chunk.map((product) => (
                                    <div
                                        key={product.id}
                                        style={{
                                            border: "1px solid rgba(204, 204, 204, 0.3)",
                                            textAlign: "center",
                                            height: "100%",
                                        }}
                                        className="flex flex-col px-6 py-4 relative gap-5 w-75"
                                    >
                                        <button className="absolute right-4 top-4 text-gray-400 cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} />{" "}
                                        </button>
                                        <img src={product.image} className="w-full" />
                                        <div className="details relative text-left flex flex-col gap-1">
                                            <span className="bg-[#ea207e] text-white text-[10px] md:text-[12px] font-bold absolute left-0 -top-6 px-1">
                                                -{product.discount}%
                                            </span>

                                            <p className="font-bold">
                                                <span className="text-[#ea207e] text-[14px] md:text-[18px]">
                                                    {product.price}.00 ₼{" "}
                                                </span>
                                                <span className="line-through text-gray-400 text-[14px] md:text-[18px]">
                                                    {product.oldPrice}.00 ₼
                                                </span>
                                            </p>

                                            <p className="bg-yellow-300 p-2 py-1 font-bold text-[10px] md:text-[12px] w-fit rounded-[3px]">
                                                {product.months}.00 x 3 ay
                                            </p>
                                            <p className="text-[13px]">{product.name}</p>

                                            <div className="text-orange-400 text-[12px]">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                        </div>
                                        <button className="mt-auto cursor-pointer w-full py-2 bg-[#ea207e1a] text-[#ea207e] font-bold">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Səbətə At
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className= "alt-button border-[#ea207e] border w-full md:w-fit text-[12px] md:text-[16px] text-[#ea207e] cursor-pointer">
                    Hamisini gor
                </button>
   
        </section>
    )
}

export default CardFactory