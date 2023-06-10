import React, { useEffect, useState } from 'react'
import Breadcump from '../components/others/breadcump';

import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getMultiLang as ml } from '../components/MultiLang';
import { LightgalleryItem } from "react-lightgallery";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet-async';
import { motion as m } from "framer-motion";


const About = ({ data }) => {
  const [t] = useTranslation("translation")



  const [modalShow, setModalShow] = useState(false);
  const about = data?.options?.about_page;
  const shoromimages = data?.options?.about_page?.showroom_images;

  const imagePerRow = 6;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
  useEffect(() => {
    window.scrollTo(0, 0)

  }, []);


  return (
    <>
      <Helmet>

        <title >KLİMATEX - {t("about")}</title>
      </Helmet>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Breadcump data={data}
        />
        <section id="1" className=' bg-[--slider27] '>
          <Container fluid>
            <div className="pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] lg:mt-5">
              <Row  >
                <Col lg={6} className="flex justify-center flex-col" data-aos="fade-right" data-aos-duration="2000">
                  <h2 className='font-[700] text-[40px] lg:text-[25px] text-[--text] mb-[30px] capitalize'>{t("about")}</h2>
                  <div className='columns-2 flex flex-col gap-[40px] text-justify text-[--text]' dangerouslySetInnerHTML={{ __html: about && ml(about?.about_1_text_az, about?.about_1_text_ru, about?.about_1_text_en) }}></div>

                </Col>
                <Col lg={6} data-aos="fade-left" data-aos-duration="2000">
                  <div className="pl-[20px]">
                    <LazyLoadImage src={about?.about_1_img} className='w-full xl:h-[500px] lg:object-contain md:object-cover md:h-full' />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section id="2" className='pt-20 bg-[--bgef] pb-[30px]'>
          <Container fluid>
            <div className="pl-[50px] pr-[50px]  lg:pl-[20px] lg:pr-[20px] ">
              <h2 className='font-[700] text-[40px] lg:text-[25px] text-[--text] mb-10  capitalize' data-aos="fade-right"
                data-aos-anchor-placement="top-center" data-aos-duration="2000">{t("shoroom")}</h2>
              <Row  >
                {
                  shoromimages && shoromimages?.slice(0, next).map((cur, i) => (
                    <Col xl={4} lg={4} md={6} xs={6}  key={i} className="p-[10px!important]" data-aos="fade-up" data-aos-duration="2000">
                      <LightgalleryItem group="any" src={cur?.images} >
                        <a >
                          <LazyLoadImage src={cur?.images} className='w-[100%!important] h-[380px] md:h-[150px] cursor-zoom-in' />
                        </a>
                      </LightgalleryItem>
                    </Col>
                  ))
                }

              </Row>
              {next < shoromimages?.length && (
                <button onClick={handleMoreImage} className="bg-[#fff] max-w-max ml-3 border-none capitalize outline-none shadow1 mt-[20px] mr-0 mb-[10px] rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-black text-[17px] ">
                  {t("more2")}
                </button>
              )}
            </div>
          </Container>
        </section>

        <div id="3" className='pb-[50px] bg-[--slider27]'>
          <Container fluid>
            <div className="pl-[50px] pr-[50px] pt-[40px] lg:pl-[20px] lg:pr-[20px] ">
              <h2 className='font-[700] text-[40px] lg:text-[25px]  text-[--text]  mb-[30px] capitalize' ata-aos="fade-right"
                data-aos-anchor-placement="top-center" data-aos-duration="2000">{t("shoroom360")}</h2>
              <div className="relative" data-aos="fade-up" data-aos-duration="2000">
                <LazyLoadImage src={about?.showroom_360_image} className='w-full h-[500px] lg:h-[300px]' />
                <span onClick={() => setModalShow(true)} className='absolute top-[50%] left-[50%] transform50 cursor-pointer'><PlayArrowIcon sx={{ fontSize: 90 }} className='text-[--textfff]' /></span>
                <Modal
                  size="lg"
                  centered
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                >
                  <Modal.Body>
                    <iframe width="100%" height="415" src={about?.showroom_360_video_link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </Modal.Body>

                </Modal>
              </div>
            </div>
          </Container>
        </div>

        <section id="4" className=' bg-[--bgef]  pt-[40px] pb-[40px]'>
          <Container fluid>
            <div className="pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px]">
              <Row>
                <Col lg={7} className='p-[20px] lg:p-[0] lg:mb-[30px] flex justify-center flex-col' data-aos="fade-right" data-aos-duration="2000">
                  <h2 className='text-[40px] lg:text-[25px] font-[700] capitalize mb-[20px] text-[--text]'>{t("production")}</h2>
                  <div className="text-[--text]" dangerouslySetInnerHTML={{ __html: about && ml(about?.about_2_text_az, about?.about_2_text_ru, about?.about_2_text_en) }}></div>
                </Col>
                <Col lg={5} className='p-[20px] lg:p-[0]'>
                  <div className="flex border-2 items-center justify-center z-20 relative image" data-aos="zoom-in-up"
                    data-aos-anchor-placement="top-center" data-aos-duration="2000">
                    <LazyLoadImage src={about?.about_2_img} className='h-[400px] md:h-full w-full ' />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section id="5" className=' bg-[--slider27]'>
          <Container fluid>
            <div className="pl-[50px] pr-[50px]  lg:pl-[20px] lg:pr-[20px]">
              <Row className='pt-[50px] pb-[50px]'>
                <Col lg={5} className='p-0 m-0 '>
                  <div className="flex  items-center justify-center z-20 relative image" data-aos="zoom-in-up"
                    data-aos-anchor-placement="top-center" data-aos-duration="2000">
                    <LazyLoadImage src={about?.about_3_img} className='h-[400px] md:h-full w-full ' />
                  </div>
                </Col>
                <Col lg={7} className=' flex justify-center flex-col pl-[40px] lg:pl-[0] lg:mt-4' data-aos="fade-left" data-aos-duration="2000">
                  <h2 className='text-[40px] lg:text-[25px] font-[700] capitalize text-[--text]'>{t("servis")}</h2>
                  <div className="text-[--text]" dangerouslySetInnerHTML={{ __html: about && ml(about?.about_3_text_az, about?.about_3_text_ru, about?.about_3_text_en) }}></div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </m.div>
    </>
  )
}

export default About
