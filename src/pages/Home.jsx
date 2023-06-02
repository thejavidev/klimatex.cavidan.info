import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = ({ data }) => {
  const banner = data?.homebanner;
  const misiya = data?.options?.misiya;
  const service = data?.service;
  const layihe = data?.layihe;
  const brend = data?.brend;
  const options = data?.options?.options;
  const tel1 = data?.options?.options?.tel1;
  const str = tel1?.replace(/\s/g, '');
  const bg = data?.options?.pagetopbanner

  const [t] = useTranslation("translation")
  useEffect(() => {
    window.scrollTo(0, 0)
   
  }, []);
  return (
    <>
      <section id="1">
        <Swiper pagination={true} modules={[Pagination]} className="banner">
          {
            banner && banner?.map((cur, i) => (
              <SwiperSlide key={i} >
                <LazyLoadImage src={cur?.src} alt={cur?.alt} className='h-[700px] w-full' />
              </SwiperSlide>
            ))
          }

        </Swiper>
      </section>

      <section id="2" className='pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] pt-[50px]'>
        <Container fluid >
          <Row  >
            <Col lg={6} className="flex justify-center flex-col">
              <h2 className='font-[600] text-[40px] text-[--text] mb-[30px]'>Havalandırma <span className='text-[--textsky]'>sistemləri</span></h2>
              <div className='columns-2 flex flex-col gap-[40px] text-justify' dangerouslySetInnerHTML={{ __html: misiya && misiya?.missiya_text_az }}></div>
              <p className='mt-[40px] flex items-center'>
                <a href={`tel:${str}`} className='text-[--text] text-[18px]'><LocalPhoneIcon fontSize="large" className='bg-[--textsky] rounded-full text-[--textfff] p-[5px]' /> {options?.tel1} </a>
              </p>
            </Col>
            <Col lg={6}>
              <div className="p-[50px]">
                <LazyLoadImage src={misiya?.missiya_image} className='h-[100%]   w-full shadow-auto' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="3" className='pt-[60px] pb-[60px] pl-0 pr-0 relative'>
        <div className="top flex justify-center items-center bg-center bg-cover bg-no-repeat h-[500px] relative after:content-[''] 
           after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:w-full after:h-full after:bg-[--bgred] after:mix-blend-multiply"
          style={{ backgroundImage: `url(${bg})` }}>
          <div className="z-20 flex flex-col items-center ">
            <h2 className='text-[--textfff] text-[40px] font-[600]'>{t("xidmeth2")}</h2>
            <h3 className='text-[--textfff] font-[200] text-[35px]'>{(t("xidmeth3"))}</h3>
          </div>
        </div>
        <Container fluid>
          <div className="mt-[-100px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px]">
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
                  <SwiperSlide key={i}>
                    <Link to={`/service/${cur?.slug_az}`}>
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
                    </Link>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </Container>
      </section>

      <section id='4' className='pt-[60px] pb-[60px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] relative'>
        <Container fluid>
          <Row container spacing={0} >
            <Col lg={4} md={6} className="bg-[--textsky] flex items-center justify-center flex-col relative cursor-pointer">
              <div className="">
                <h3 className='text-[--textfff] capitalize text-[30px]'>{t("projects")}</h3>
              </div>
              <div className="">
                <Link to={'/project'}>
                  <button className='mt-[20px] bg-[--textfff] text-[--textsky] capitalize pl-[20px] pr-[20px] pt-[10px] pb-[10px] rounded-[4px] font-[500]'>{t("loadmore")}</button>
                </Link>
              </div>
            </Col>
            {
              layihe && layihe.slice(0, 5).map((cur, i) => (
                <Col lg={4} key={i} className="overflow-hidden">
                  <Link to={`/project/${cur?.slug_az}`} className='cursor-pointer tansitionall relative grayscale1'>
                    <LazyLoadImage className=' grayscale-[100%] hover:grayscale-0' src={cur?.cover} />
                    <h2 className='h2 absolute top-[0] left-[50%] w-full p-[20px] text-center transform50
                     text-[--textfff] text-[25px] opacity-[0] capitalize tansitionall' >{cur?.name_az}</h2>
                  </Link>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section id='5' className='pt-[60px] pb-[60px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] relative '>
        <Swiper
          slidesPerView={7}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className='bg-[#fff] p-[10px] rounded-[0.625em] mySwiper'
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
            brend && brend?.map((cur, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-center items-center  h-[60px]">
                  <LazyLoadImage src={cur?.src} className='border-2 grayscale-[100%] hover:grayscale-0' />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
    </>
  )
}

export default Home
