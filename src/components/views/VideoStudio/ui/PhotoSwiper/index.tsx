import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { swiperItems } from "../../data/swiperItems";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";
import "swiper/css/navigation";
import s from "./styles.module.sass";

import { Fancybox } from "@/components/ui/Fancybox";
import { ArrowLeftIcon } from "@/components/ui/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  767: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

const PhotoSwiper = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(1);
  const sliderRef = useRef(null);

  const handleNextSlide = () => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current?.swiper.slideNext();
    //@ts-ignore
    setCurrentSlideIndex(sliderRef.current?.swiper.activeIndex + 1);
  };

  const handlePrevSlide = () => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current?.swiper.slidePrev();
    //@ts-ignore
    setCurrentSlideIndex(sliderRef.current?.swiper.activeIndex + 1);
  };

  useEffect(() => {
    //@ts-ignore
    setTotalSlides(sliderRef.current?.swiper.slides.length);
  }, []);

  return (
    <div className={s.swiper}>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Swiper
          ref={sliderRef}
          slidesPerView={3}
          spaceBetween={16}
          speed={800}
          className="mySwiper"
          centeredSlides={false}
          breakpoints={breakpoints}
        >
          {swiperItems.map((result) => (
            <SwiperSlide data-caption={result.img} key={result.id}>
              <div className={s.imageWrapper}>
                <Image
                  data-fancybox="gallery"
                  src={result.img}
                  fill
                  alt="photo"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Fancybox>

      <div className={s.swiperBottom}>
        <button onClick={handlePrevSlide} aria-label="navigation">
          <ArrowLeftIcon />
        </button>
        <button onClick={handleNextSlide} aria-label="navigation">
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default PhotoSwiper;