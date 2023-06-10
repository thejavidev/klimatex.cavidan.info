import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Brends = ({brend}) => {
  return (
    <>
        <div id='5' className='pt-[60px] pb-[60px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] relative ' >
          <Swiper
            slidesPerView={7}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className='bg-[--brend] shadow-auto p-[10px] rounded-[0.625em] mySwiper'
            breakpoints={{
              40: {
                slidesPerView: 2,

              },
              340: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,

              },
              768: {
                slidesPerView: 3,

              },
              1024: {
                slidesPerView: 4,
              },
              1299: {
                slidesPerView: 7,
              },
            }}
          >
            {
              brend && brend?.map((cur, i) => (
                <SwiperSlide key={i}>
                  <div className="flex justify-center items-center  h-[60px]">
                    <LazyLoadImage src={cur?.src} className='grayscale-[100%] hover:grayscale-0' />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div> 
    </>
  )
}

export default Brends
