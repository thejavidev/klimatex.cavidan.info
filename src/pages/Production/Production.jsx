import React from 'react';
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../../components/MultiLang';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Production = ({ data }) => {
  const [t] = useTranslation("translation");
  const pagebanner = data?.options?.pagetopbanner;
  const production = data?.istehsalat
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <Helmet>
        <title >KLİMATEX - {t("production")}</title>
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
            <h2 className='absolute top-[65%] left-[50%] z-5 text-[--textfff] text-[40px] lg:text-[25px] font-[200] capitalize transfrom70'>{t("production")}</h2>
          </div>
        </div>
        <section id="1" className='pt-[60px] bg-[--bgef] min-h-[55vh] pb-[60px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] md:pl-[10px] md:pr-[10px] relative'>
          <Container fluid >
            <Row>
              {
                production && production?.map((cur, index) => (
                  <Col key={index} xl={2} lg={3} md={4} sm={6} xs={6} data-aos="fade-up" data-aos-duration="2000" data-aos-offset={(280 * index) / 5}>
                    <Link to={`${cur?.slug_az}`}>
                      <div className="flex justify-center flex-col h-full w-full cursor-pointer productionimg">
                        <div className="top">
                          <LazyLoadImage src={cur?.src} className='w-full tansitionall2' />
                        </div>
                        <div className="h2 mt-[20px] bg-[#fff] flex items-center justify-center pt-[10px] pb-[10px] pl-[30px] pr-[30px] md:pl-[5px] md:pr-[5px] text-center tansitionall2 h-full">
                          <h2 className='text-[16px]'>{ml(cur?.name_az, cur?.name_ru, cur?.name_en)}</h2>
                        </div>
                      </div>
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

export default Production
