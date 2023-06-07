import React from 'react'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion as m } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Contact = ({ data }) => {
  const [t] = useTranslation("translation");
  const pagebanner = data?.options?.pagetopbanner;
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.05, ease: "easeOut" }}
      >
        <div className="relative w-full breadcump">
          <LazyLoadImage src={pagebanner} className='w-full h-[395px]' />
          <div className="" >
            <h2 className='absolute top-[65%] left-[50%] z-5 text-[--textfff] text-[40px] font-[200] capitalize transfrom70'>{t("contact")}</h2>
          </div>
        </div>
        <section id='1' className='pt-[60px] bg-[--bgef] min-h-[55vh] pb-[60px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] relative'>
          <Container fluid>
            <Row>
              <form className='flex flex-wrap w-full'>
                <Row className='w-full'>
                  <Col lg={4}>
                    <div className="w-full">
                      <input type="text" placeholder='Ad,soyad' className='w-full bg-[--textfff] outline-none shadow-none border-none caret-[#ff0000] pt-[15px] pb-[15px] pl-[20px] pr-[20px] text-[18px]' />
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="w-full">
                      <input type="text" placeholder='E-mail' className='w-full bg-[--textfff] outline-none shadow-none border-none caret-[#ff0000] pt-[15px] pb-[15px] pl-[20px] pr-[20px] text-[18px]' />
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="w-full">
                      <input type="text" placeholder='Nömrə' className='w-full bg-[--textfff] outline-none shadow-none border-none caret-[#ff0000] pt-[15px] pb-[15px] pl-[20px] pr-[20px] text-[18px]' />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className='mt-[40px]'>
                      <textarea placeholder='Mesaj' className='w-full outline-none shadow-none border-none resize-none h-[300px] caret-[#ff0000] pt-[15px] pb-[15px] pl-[20px] pr-[20px] text-[18px] '></textarea>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className='flex items-center justify-center mt-[30px] '>
                      <button className='bg-[--textfff]  w-max pl-[40px] pr-[40px] pt-[10px] pb-[10px]'>{t("send")}</button>
                    </div>
                  </Col>
                </Row>
              </form>
            </Row>
          </Container>
        </section>
      </m.div>
    </>
  )
}

export default Contact
