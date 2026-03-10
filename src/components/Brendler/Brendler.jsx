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



const products = [
    {
        id: 1,
        name: "Product A",
        image:
            "https://strgimgr.b-cdn.net/dcmimages/Brands/Apple/apple_37776.png?quality=75&width=200",
    },
    { id: 2, name: "Product C", image: "https://strgimgr.b-cdn.net/dcmimages/Brands/Xiaomi/xiaomi_37780.jpg?quality=75&width=200" },
    { id: 3, name: "Product B", image: "https://strgimgr.b-cdn.net/dcmimages/Brands/Honor/honor_37788.png?quality=75&width=200" },
    { id: 4, name: "Product D", image: "https://strgimgr.b-cdn.net/dcmimages/Brands/Samsung/samsung_37784.png?quality=75&width=200" },
    { id: 5, name: "Product E", image: "https://strgimgr.b-cdn.net/dcmimages/Brands/LG/lg_37792.png?quality=75&width=200" },
    { id: 6, name: "Product F", image: "https://strgimgr.b-cdn.net/dcmimages/Brands/Bosch/bosch_37796.png?quality=75&width=200" },
    { id: 7, name: "Product G", image: "https://strgimgr.b-cdn.net/dcmimages/Brands/Asus/asus_37800.png?quality=75&width=200" },
    { id: 8, name: "Product H", image: "https://strgimgr.b-cdn.net/dcmimages/Brands/Lenovo/lenovo_37804.png?quality=75&width=200" },
    { id: 9, name: "Product I", image: "https://strgimgr.b-cdn.net/dcmimages/Brands/HP/hp_37808.png?quality=75&width=200" },
    { id: 10, name: "Product J", image: "https://strgimgr.b-cdn.net/dcmimages/Brands/Roborock/roborock_37812.png?quality=75&width=200" },
]

// Helper to split array into chunks of 5
const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};









const Brendler = () => {

    const productChunks = chunkArray(products, 1);

    return (
        <div>
            <section className="flex flex-col gap-5">
                <div style={{marginLeft:"120px"}}>
                    <h3 className="font-bold text-[32px]">
                        <span className=" p-3 py-2 rounded-[3px]">
                            Populyar Brendler
                        </span>
                        
                    </h3>
                </div>
                <div>
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
                                            className="flex flex-col items-center px-6 py-4 relative gap-5 w-[250px] h-[88px]">

                                            <img src={product.image} className="w-[200px] h-[60px] object-contain " />


                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    )
}

export default Brendler