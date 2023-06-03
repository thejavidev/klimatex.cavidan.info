import React, { useEffect } from 'react';
import { motion as m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { getMultiLang as ml } from '../components/MultiLang';
import { Tabs, TabList } from '@chakra-ui/react';
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Service = ({ data }) => {


  const service = data?.service
  const { slug_az } = useParams();
  const currentPost = service?.find((post) => post?.slug_az === slug_az);
  const currentitem = currentPost?.products
  const pagebanner = data?.options?.pagetopbanner;
  const [t] = useTranslation("translation")
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <div className="bg-[--bgef] min-h-[100vh]">
        <m.div
         initial={{opacity:0}}
         animate={{opacity:1}}
         exit={{opacity:0}}
         transition={{duration:1.75,ease:"easeOut"}}
        >
          <div className="relative w-full breadcump">
            <LazyLoadImage src={pagebanner} className='w-full h-[395px]' />
            <div className="" >
              <h2 className='absolute top-[65%] left-[50%] z-5 text-[--textfff] text-[40px] font-[200] capitalize transfrom70'>{t("xidmeth3")}</h2>
            </div>
          </div>
          <section id="1" className='pt-[50px]'>
            <Container fluid>
              <div className='pl-[100px] pr-[100px]'>
                <Swiper
                  slidesPerView={7}
                  spaceBetween={20}
                  speed={1200}
                  breakpoints={{
                    40: {
                      slidesPerView: 2,

                    },
                    340: {
                      slidesPerView: 2,
                    },
                    640: {
                      slidesPerView: 2,

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
                    service && service?.map((cur, i) => (
                      <SwiperSlide key={i} data-aos="fade-down" data-aos-duration="2000">
                        <NavLink className='service' to={`/service/${cur?.slug_az}`}>
                          <div className="bg-[--textfff] services_img tansitionall cursor-pointer flex flex-col justify-between items-center
                     relative p-[40px] h-[200px] 
                     ">
                            <div className=" flex flex-col items-center justify-center w-full z-5 h-full">
                              <LazyLoadImage src={cur?.src} className='curimg' alt={cur?.alt_az} />
                              <LazyLoadImage src={cur?.src_hover} className='hoverimg hidden z-[20]' alt={cur?.alt_az} />

                            </div>
                            <div className="text-center z-5 pt-[10px] z-[20]">
                              <h3 className='h3 text-[16px] text-[--textsky] uppercase '>{cur?.name_az}</h3>
                            </div>
                          </div>
                        </NavLink>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>

                <Tabs className='mt-10 pb-20'>
                  <TabList className='border-undisplay serviced relative'>
                    <Swiper
                      slidesPerView={1}
                      pagination={{
                        el:".mypagination"
                      }}
                      modules={[Pagination]}>
                      {
                        currentitem && currentitem?.map((cur, i) => (
                          <SwiperSlide key={i} className='w-[100%!important]'>
                            <Row className='items-center'>
                              <Col lg={6} md={12} data-aos="fade-right" >
                                <div className="">
                                  <h2 className='font-[600] text-[40px] mb-[40px]'>{ml(cur?.name_az, cur?.name_ru, cur?.name_en)}</h2>
                                  <div dangerouslySetInnerHTML={{ __html: cur && ml(cur?.text_az, cur?.text_ru, cur?.text_en) }}></div>
                                </div>
                              </Col>
                              <Col lg={6} md={12} data-aos="fade-left" data-aos-duration="2000">
                                <LazyLoadImage src={cur?.src} className='h-[450px]' />
                              </Col>
                            </Row>
                          </SwiperSlide>
                        ))
                      }
                    </Swiper>
                    <div className="mypagination bottom-[-50px!important] swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
                      
                    </div>
                  </TabList>
                </Tabs>
              </div>
            </Container>
          </section>
        </m.div>
      </div>
    </>
  )
}

export default Service
