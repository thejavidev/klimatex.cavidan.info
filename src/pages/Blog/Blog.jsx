import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getMultiLang as ml } from '../../components/MultiLang';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
const Blog = ({ data }) => {
  const [t] = useTranslation("translation");
  const pagebanner = data?.options?.pagetopbanner;
  const blog = data?.blog;
  const bloglead = data?.bloglead;

  const date = new Date()
  const day = new Date().getDay();
  const year = new Date().getFullYear()
  const month = date.toLocaleString('default', { month: 'long' });
  const fulldate = day + " " + month + ',' + year;
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <Helmet>
        <title >KLİMATEX - {t("blog")}</title>
      </Helmet>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.05, ease: "easeOut" }}
      >
        <div className="relative w-full breadcump">
          <LazyLoadImage src={pagebanner} className='w-full h-[395px] lg:h-[230px]' />
          <div className="" >
            <h2 className='absolute top-[65%] left-[50%] z-5 text-[#fff] text-[40px] lg:text-[25px]  font-[200] capitalize transfrom70'>{t("blog")}</h2>
          </div>
        </div>
        <section id="1">
          <Container fluid className=' bg-[--bgef] min-h-[55vh]   relative'>
            <Row>
              <Col lg={12} className='bg-[--bgf0] hiddden pt-[60px] md:pt-[20px] pb-[60px] pl-[60px] pr-[60px] lg:pl-[20px] lg:pr-[20px]'>
                {
                  bloglead && bloglead?.map((cur, i) => (
                    <Row key={i}>
                      <Col lg={6} >
                        <div className="flex justify-center flex-col h-full pr-[50px] lg:pr-[0]">
                          <div className="blog md:pt-[20px]">
                            <div className='text-[--text]' dangerouslySetInnerHTML={{ __html: cur?.title_az && ml(cur?.title_az, cur?.title_ru, cur?.title_en) }}>
                            </div>
                          </div>
                          <div className="pt-[30px] pb-[30px]">
                            <div className='line-clamp-3 text-justify text-[--text]' dangerouslySetInnerHTML={{ __html: cur?.text_az && ml(cur?.text_az, cur?.text_ru, cur?.text_en) }}></div>
                          </div>
                          <div className="">
                            <Link to={`${cur?.slug_az}`}>
                              <Button className='pt-[10px] capitalize font-[500] pb-[10px] pl-[40px] pr-[40px] border-none bg-[--bgsky] text-[--text]'>
                                {t("loadmore")}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} className='order-[-1]'>
                        <div className="relative md:mt-[20px]">
                          <div className="absolute bottom-[0] left-[0] w-max opacity-[0.75] pt-[6px] pb-[6px] pl-[20px] pr-[20px] rounded-left text-[--textfff] font-[600] ">{fulldate}</div>
                          <LazyLoadImage src={cur?.banner} className='h-[500px]  w-full lg:h-[250px]' />
                        </div>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
              <Col lg={12} className='bg-[--textfff] pl-[60px] pt-[60px] pb-[60px] pr-[60px] lg:pl-[20px] lg:pr-[20px]'>
                <Row>
                  {
                    blog && blog?.map((cur, i) => (
                      <Col key={i} lg={3} className='overflow-hidden cursor-pointer p-[20px]'>
                        <Link to={`${cur?.slug_az}`}>
                          <div className="relative">
                            <div className="absolute bottom-[0] left-[0] w-max opacity-[0.75] pt-[6px] pb-[6px] pl-[20px] pr-[20px] rounded-left text-[--textfff] font-[600] ">{fulldate}</div>
                            <LazyLoadImage src={cur?.banner} className='h-[400px] w-full md:h-[250px]' />
                          </div>
                          <div className="pt-[20px]">
                            <div className='font-[700] ' dangerouslySetInnerHTML={{ __html: cur?.text_az && ml(cur?.title_az, cur?.title_ru, cur?.title_en) }}></div>
                            <div className='line-clamp-2 mt-[15px] font-[300] text-[20px] text-justify' dangerouslySetInnerHTML={{ __html: cur?.text_az && ml(cur?.text_az, cur?.text_ru, cur?.text_en) }}></div>
                          </div>
                        </Link>
                      </Col>
                    ))
                  }
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </m.div>
    </>
  )
}

export default Blog
