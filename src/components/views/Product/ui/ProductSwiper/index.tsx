import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import { Thumbs } from "swiper/modules";
import "react-image-gallery/styles/css/image-gallery.css";

import s from "./styles.module.sass";

import product1 from "../../../../../../public/equipments/equipment3.png";
import product2 from "../../../../../../public/equipments/equipment4.png";
import product3 from "../../../../../../public/equipments/equipment5.png";
import { Fancybox } from "@/components/ui/Fancybox";

const images = [
  {
    original: product1.src,
    thumbnail: product1.src,
  },
  {
    original: product2.src,
    thumbnail: product2.src,
  },
  {
    original: product3.src,
    thumbnail: product3.src,
  },
];

const ProductSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className={s.swiper}>
      <div className={s.swiperInner}>
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <Swiper
            spaceBetween={10}
            thumbs={{
              swiper:
                //@ts-ignore
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Thumbs]}
            className={s.mainImage}
          >
            {images.map((image) => (
              <SwiperSlide data-caption={image} key={image.original}>
                <div className={s.imageWrapper}>
                  <Image
                    data-fancybox="gallery"
                    src={image.original}
                    fill
                    alt="result"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fancybox>

        <Swiper
          //@ts-ignore
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className={`${s.thumbs} swiper-thumbs`}
        >
          {images.map((image) => (
            <SwiperSlide data-caption={image} key={image.original}>
              <div className={s.imageWrapper}>
                <Image
                  data-fancybox="gallery"
                  src={image.original}
                  fill
                  alt="result"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSwiper;