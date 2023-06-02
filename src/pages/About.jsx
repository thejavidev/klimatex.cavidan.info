import React, { useEffect, useState } from 'react'
import Breadcump from '../components/others/breadcump';
import Grid from '@mui/material/Unstable_Grid2';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getMultiLang as ml } from '../components/MultiLang';
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryItem } from "react-lightgallery";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const About = ({ data }) => {
  const [t] = useTranslation("translation")
  // console.log(data?.options?.about_page?.showroom_images)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '0px solid transparent',
    boxShadow: 0,
    p: 1,
  };

  return (
    <>
      <Breadcump data={data} />
      <section id="1" className=' bg-[--textfff] '>
        <Container fluid>
          <div className="pl-[50px] pr-[50px]">
            <Row  >
              <Col lg={6} className="flex justify-center flex-col">
                <h2 className='font-[700] text-[40px] text-[--text] mb-[30px] capitalize'>{t("about")}</h2>
                <div className='columns-2 flex flex-col gap-[40px] text-justify' dangerouslySetInnerHTML={{ __html: about && ml(about?.about_1_text_az, about?.about_1_text_ru, about?.about_1_text_en) }}></div>

              </Col>
              <Col lg={6}>
                <div className="p-[50px]">
                  <LazyLoadImage src={about?.about_1_img} className='w-full' />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section id="2" className='pt-20 bg-[--bgef] pb-[30px]'>
        <Container fluid>
          <div className="pl-[50px] pr-[50px]">
            <h2 className='font-[700] text-[40px] text-[--text] mb-10  capitalize'>{t("shoroom")}</h2>
            <Row  >
              {
                shoromimages && shoromimages?.slice(0, next).map((cur, i) => (
                  <Col lg={4} key={i} className="p-[10px!important]">
                    <LightgalleryItem group="any" src={cur?.images}>
                      <a >
                        <img src={cur?.images} className='w-[100%!important] h-[380px]' />
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

      <div id="3" className='mt-[10px] pb-[50px] bg-[--textfff]'>
        <Container fluid>
          <div className="pl-[50px] pr-[50px] pt-[40px]">
            <h2 className='font-[700] text-[40px] text-[--text]  mb-[30px] capitalize'>{t("shoroom360")}</h2>
            <div className="relative">
              <LazyLoadImage src={about?.showroom_360_image} className='w-full h-[500px] ' />
              <span onClick={handleOpen} className='absolute top-[50%] left-[50%] transform50 cursor-pointer'><PlayArrowIcon sx={{ fontSize: 90 }} className='text-[--textfff]' /></span>
              <Modal
                open={open}
                onClose={handleClose}
              >
                <Box sx={style}>
                  <iframe width="100%" height="415" src={about?.showroom_360_video_link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Box>
              </Modal>
            </div>
          </div>
        </Container>
      </div>

      <section id="4" className=' bg-[--bgef] mt-2 pt-[40px] pb-[40px]'>
        <Container fluid>
          <div className="pl-[50px] pr-[50px]">
            <Row>
              <Col lg={7} className='p-[20px] flex justify-center flex-col'>
                <h2 className='text-[40px] font-[700] capitalize mb-[20px]'>{t("production")}</h2>
                <div className="" dangerouslySetInnerHTML={{ __html: about && ml(about?.about_2_text_az, about?.about_2_text_ru, about?.about_2_text_en) }}></div>
              </Col>
              <Col lg={5} className='p-[20px]'>
                <div className="flex border-2 items-center justify-center z-20 relative image">
                  <LazyLoadImage src={about?.about_2_img} className='h-[400px]  w-full ' />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section id="5" className=' bg-[--textfff] mt-2 pt-[40px] pb-[40px]'>
        <Container fluid>
          <div className="pl-[50px] pr-[50px]">
            <Row>
              <Col lg={5} className='p-[20px]'>
                <div className="flex border-2 items-center justify-center z-20 relative image">
                  <LazyLoadImage src={about?.about_3_img} className='h-[400px]  w-full ' />
                </div>
              </Col>
              <Col lg={7} className='p-[20px] flex justify-center flex-col pl-[60px]'>
                <h2 className='text-[40px] font-[700] capitalize mb-[20px]'>{t("servis")}</h2>
                <div className="" dangerouslySetInnerHTML={{ __html: about && ml(about?.about_3_text_az, about?.about_3_text_ru, about?.about_3_text_en) }}></div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}

export default About
