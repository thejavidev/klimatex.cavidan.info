import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion as m } from "framer-motion";
import Brends from './Brends';
import { getMultiLang as ml } from '../components/MultiLang';



const Home = ({data}) => {


  const homeAPI = [
    {
      id: 1,
      data: data?.homebanner
    },
    {
      id: 2,
      data: data?.options?.misiya
    },
    {
      id: 3,
      data: data?.service
    },
    {
      id: 4,
      data: data?.layihe
    },
    {
      id: 5,
      data: data?.brend
    },
    {
      id: 6,
      data: data?.options?.options
    },
    {
      id: 7,
      data: data?.options?.options?.tel1
    },
    {
      id: 8,
      data: data?.options?.pagetopbanner
    },
  ]
  const phone = homeAPI[6]?.data;
  const str = phone?.replace(/\s/g, '')

  const [t] = useTranslation("translation")

  return (
    <>
    <div className="bg-[--bgef]"  >

    
      <m.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0.75,ease:"easeOut"}}
      >
        <section id="1">
          <Swiper pagination={true} modules={[Pagination]} className="banner">
            {
              homeAPI[0]?.data && homeAPI[0]?.data?.map((cur, i) => (
                <SwiperSlide key={i} >
                  <div className="relative">
                     <LazyLoadImage src={cur?.src} alt={cur?.alt} className='h-[700px] lg:h-[350px] w-full' />
                     <div className='absolute left-[37%] right-[0] top-[50%] transform50 carouselbanner' dangerouslySetInnerHTML={{ __html:cur?.title_az && ml(cur?.title_az,cur?.title_ru,cur?.title_en) }}></div>
                  </div>
               
                </SwiperSlide>
              ))
            }

          </Swiper>
        </section>

       <section id="2" className='pl-[50px] pr-[50px] xl:pl-[20px] xl:pr-[20px] pt-[50px] '>
          <Container fluid >
            <Row  >
              <Col lg={6} className="flex justify-center flex-col"  >
                <h2 className='font-[600] text-[40px] xl:text-[30px] text-[--text] mb-[30px]' >{t("colling")} <span className='text-[--textsky]'>{t("systems")}</span></h2>
                <div className='columns-2 flex flex-col gap-[40px] text-justify text-[--text]' data-aos="fade-right" data-aos-duration="2000" dangerouslySetInnerHTML={{ __html: homeAPI[1]?.data && ml(homeAPI[1]?.data?.missiya_text_az,homeAPI[1]?.data?.missiya_text_ru,homeAPI[1]?.data?.missiya_text_en) }}></div>
                <p className='mt-[40px] flex items-center'>
                  <a href={`tel:${str}`} className='text-[--text] text-[18px]' data-aos="fade-right" data-aos-duration="2000"><LocalPhoneIcon fontSize="large" className='bg-[--textsky] rounded-full text-[--textfff] p-[5px]' /> {phone} </a>
                </p>
              </Col>
              <Col lg={6} className='md:p-[0] md:m[0]'>
                <div className="p-[50px] lg:p-[10px] lg:mt-5 md:p-0" data-aos="fade-left" data-aos-duration="2000">
                  <LazyLoadImage src={homeAPI[1]?.data?.missiya_image} className='h-[100%]   w-full shadow-auto' />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="3" className='pt-[60px] pb-[60px] pl-0 pr-0 relative'>
          <div className="top flex justify-center items-center bg-center bg-cover bg-no-repeat h-[500px] md:h-[350px] relative after:content-[''] 
           after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:w-full after:h-full after:bg-[--bgred] after:mix-blend-multiply"
            style={{ backgroundImage: `url(${homeAPI[7]?.data})` }}>
            <div className="z-20 flex flex-col items-center " data-aos="fade-left" data-aos-duration="3000">
              <h2 className='text-[#fff] text-[40px] md:text-[25px] font-[600]'>{t("xidmeth2")}</h2>
              <h3 className='text-[#fff] font-[200] text-[35px] md:text-[25px]'>{(t("xidmeth3"))}</h3>
            </div>
          </div>
          <Container fluid>
            <div className="mt-[-100px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px]">
              <Swiper
                slidesPerView={7}
                spaceBetween={20}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  40: {
                    slidesPerView: 1,

                  },
                  340: {
                    slidesPerView: 1,
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
                  homeAPI[2]?.data && homeAPI[2]?.data?.map((cur, i) => (
                    <SwiperSlide key={i} >
                      <Link to={`/service/${cur?.slug_az}`}>
                        <div className="bg-[--slider27] services_img tansitionall cursor-pointer flex flex-col justify-between items-center
                     relative p-[40px] md:p-[10px] h-[200px] 
                     ">
                          <div className=" flex flex-col items-center justify-center w-full z-5 h-full">
                            <LazyLoadImage src={cur?.src} className='curimg' alt={cur?.alt_az} />
                            <LazyLoadImage src={cur?.src_hover} className='hoverimg hidden z-[20]' alt={cur?.alt_az} />

                          </div>
                          <div className="text-center z-5 pt-[10px] z-[20]">
                            <h3 className='h3 text-[16px] md:text-[14px] m-0 text-[--bgsky] uppercase '>{ml(cur?.name_az,cur?.name_ru,cur?.name_en)}</h3>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </Container>
        </section>

        <section id='4' className='pt-[60px] pb-[60px] md:pb-[20px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] relative'>
          <Container fluid>
            <Row className='m-0 p-0' data-aos="fade-up" data-aos-duration="2000">
              <Col lg={4} md={6} xs={6} className="bg-[--bgsky] flex items-center justify-center flex-col relative cursor-pointer">
                <div className="">
                  <h3 className='text-[#fff] capitalize text-[30px] lg:text-[20px]'>{t("project")}</h3>
                </div>
                <div className="">
                  <Link to={'/project'}>
                    <button className='mt-[20px] bg-[--textfff] text-[--textwhite] capitalize
                     pl-[20px] pr-[20px] pt-[10px] pb-[10px] md:pl-[5px] md:pr-[5px] md:pt-[5px] md:pb-[5px] md:text-[13px] rounded-[4px] font-[500]'>{t("loadmore")}</button>
                  </Link>
                </div>
              </Col>
              {
                homeAPI[3]?.data && homeAPI[3]?.data.slice(0, 5)?.map((cur, i) => (
                  <Col lg={4} md={6} xs={6} key={i} className="overflow-hidden p-0 m-0" >
                    <Link to={`/project/${cur?.slug_az}`} className='cursor-pointer tansitionall relative grayscale1'>
                      <LazyLoadImage className=' grayscale-[100%] hover:grayscale-0' src={cur?.cover} />
                      <h2 className='h2 absolute top-[0] left-[50%] w-full p-[20px] text-center transform50
                     text-[#fff] text-[25px] xl:text-[20px] md:text-[15px] xl:p-[10px] m-0  opacity-[0] capitalize tansitionall' >{ml(cur?.name_az,cur?.name_ru,cur?.name_en)}</h2>
                    </Link>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </section>

        <Brends brend={homeAPI[4]?.data} />
      </m.div>
      </div>
    </>
  )
}

export default Home
