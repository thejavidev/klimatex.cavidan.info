import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../../components/MultiLang';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const Projects = ({ data }) => {
  const pagebanner = data?.options?.pagetopbanner;
  const projects = data?.layihe;
  const [t] = useTranslation("translation");

  const imagePerRow = 5;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.75, ease: "easeOut" }}
      >
        <div className="relative w-full breadcump">
          <LazyLoadImage src={pagebanner} className='w-full h-[395px]' />
          <div className="" >
            <h2 className='absolute top-[65%] left-[50%] z-5 text-[--textfff] text-[40px] font-[200] capitalize transfrom70'>{t("project")}</h2>
          </div>
        </div>

        <section id='4' className='pt-[60px] min-h-[100vh] pb-[60px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] relative'>
          <Container fluid>
            <Row className='m-0 p-0' data-aos="fade-up" data-aos-duration="2000">
              <Col lg={4} md={6} className="bg-[--textsky] flex items-center justify-center flex-col relative cursor-default">
                <div className="">
                  <h3 className='text-[--textfff] capitalize text-[30px]'>{t("projects")}</h3>
                </div>
                <div className="">
                  {next < projects?.length && (
                    <button onClick={handleMoreImage} className='mt-[20px] bg-[--textfff] text-[--textsky] capitalize pl-[20px] pr-[20px] pt-[10px] pb-[10px] rounded-[4px] font-[500]'>{t("loadmore")}</button>
                  )}
                </div>
              </Col>
              {
                projects && projects?.slice(0, next)?.map((cur, i) => (
                  <Col lg={4} key={i} className="overflow-hidden p-0 m-0" >
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

      </m.div>
    </>
  )
}

export default Projects
