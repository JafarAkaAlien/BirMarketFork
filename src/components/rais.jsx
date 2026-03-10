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
import CardFactory from "./CardFactory/CardFactory";

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

const MegaSale = () => {
  const productChunks = chunkArray(products, 1);

  return (
    <section
      id="rais"
      className="flex flex-col gap-15 text-center w-full items-center"
    >
      <div className="max-w-7xl w-screen px-4 py-5 flex flex-col gap-15">
        <section className="flex flex-col gap-5">
          <div className="self-start">
            <h3 className="font-bold text-[32px]">
              <span className="text-white bg-[#ea207e] p-3 py-2 rounded-[3px]">
                Mega
              </span>{" "}
              endirimlər
            </h3>
          </div>
          <CardFactory data={"mega"}/>
        </section>

        <section className="flex flex-col gap-5">
          <div className="self-start">
            <h3 className="font-bold text-[32px]">TOP məhsullar</h3>
          </div>

            <CardFactory data="top"/>

        </section>

        <section className="flex flex-col gap-5">
          <div className="flex gap-5 self-start">
            <h3 className="font-bold text-[32px]">Yeniliklər</h3>
            <img
              className="w-35"
              src="https://birmarket.az/images/birmarket_logo.svg"
            />
          </div>
          <CardFactory data="news"/>
        </section>
      </div>

      <section className="flex justify-center items-center bg-linear-to-r from-pink-400 to-[#ea207e] w-full not-last:max-h-0 lg:max-h-120">
        <div className="flex flex-col md:flex-row justify-center gap-20 max-w-7xl h-full px-3">
          <article className="text-white py-4 lg:py-15 text-left flex flex-col gap-5">
            <h1 className="font-bold text-[24px] lg:text-[48px]">
              Yoxla, sevəcəksən!
            </h1>

            <ul className="flex flex-col text-[18px] lg:text-[20px]">
              <li>
                <FontAwesomeIcon icon={faTruckFast} /> <b>2 saat</b> ərzində
                ekspres çatdırılma
              </li>
              <li>
                <FontAwesomeIcon icon={faPercent} /> <b>24 ayadək</b> sərfəli{" "}
                <b>kredit</b> və <b>taksit</b> imkanları
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationPin} /> <b>900-dən</b> çox
                təhvil məntəqəsinə pulsuz çatdırılma
              </li>
              <li>
                <FontAwesomeIcon icon={faBagShopping} /> <b>Yüz minlərlə</b>{" "}
                məhsul
              </li>
            </ul>

            <h1 className="font-bold text-center text-[14px] w-fit bg-white text-purple-800 rounded-2xl px-3 py-2">
              Tətbiqi yüklə, sərfəli alış-verişi yoxla
            </h1>

            <div className="flex gap-3">
              <img src="https://birmarket.az/images/landing/google-play.svg" />
              <img src="https://birmarket.az/images/landing/app-store.svg" />
              <img src="https://birmarket.az/images/landing/huawei-app-gallery.svg" />
            </div>
          </article>

          <aside className="w-90 hidden md:flex mt-auto">
            <img src="https://birmarket.az/images/landing/birmarket_app_store_az.webp" />
          </aside>
        </div>
      </section>
    </section>
  );
};

export default MegaSale;
