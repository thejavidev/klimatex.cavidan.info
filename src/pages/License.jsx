import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getMultiLang as ml } from '../components/MultiLang';
import { Helmet } from 'react-helmet-async';

const License = ({ data }) => {

  const [t] = useTranslation("translation");
  const pagebanner = data?.options?.pagetopbanner;
  const licency = data?.licency;
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <Helmet>
        <title >KLİMATEX - {t("license")}</title>
      </Helmet>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.05, ease: "easeOut" }}
      >
        <div className="relative w-full breadcump">
          <LazyLoadImage src={pagebanner} className='w-full h-[395px]' />
          <div className="" >
            <h2 className='absolute top-[65%] left-[50%] z-5 text-[--textfff] text-[40px] font-[200] capitalize transfrom70'>{t("license")}</h2>
          </div>
        </div>
        <section id="1" className='pt-[60px] bg-[--bgef] min-h-[55vh] pb-[60px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] relative'>
          <Container fluid >
            <Row>
              {
                licency && licency?.map((cur, i) => (
                  <Col key={i} lg={3} md={4} sm={6} xs={6}>
                    <div className="relative grayscale1 tansitionall">
                      <LazyLoadImage src={cur?.src} />
                      <h2 className='h2 absolute top-[0] left-[50%] w-full p-[20px] text-center transform50
                     text-[--textfff] text-[25px] opacity-[0] capitalize tansitionall' >{ml(cur?.name_az, cur?.name_ru, cur?.name_en)}</h2>
                    </div>

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

export default License
