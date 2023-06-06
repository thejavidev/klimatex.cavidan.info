import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../../components/MultiLang';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useEffect } from 'react';

const ProductionSub = ({ data }) => {
  const [t] = useTranslation("translation");
  const pagebanner = data?.options?.pagetopbanner;

  const { slug_az } = useParams();
  const production = data?.istehsalat;
  const currentPost = production?.find((post) => post?.slug_az === slug_az);
  const currentItem = currentPost?.products;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

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
            <h2 className='absolute top-[65%] left-[50%] z-5 text-[--textfff] text-[40px] font-[200] capitalize transfrom70'>{t("production")}</h2>
          </div>
        </div>
        <section id="1" className='pt-[60px] bg-[--bgef] min-h-[50vh] pb-[60px]  relative'>
          <Container fluid >
            <Row>
              <Tabs >
                <TabList className='border-undisplay ml-[80px] mr-[80px] bg-[#ffff] w-max ' >

                  {
                    currentItem && currentItem?.map((cur, i) => (
                      <Tab key={i} _selected={{ color: 'white', bg: 'blue.500' }} >
                        <h2 className=' pt-[5px] pb-[5px] pl-[20px] pr-[20px] '>{cur?.name_az}</h2>
                      </Tab>
                    ))
                  }
                </TabList>

                <TabPanels>
                  {
                    currentItem && currentItem?.map((cur, i) => (
                      <TabPanel key={i} className='p-0'>
                        <Row>
                          <Col lg={12} className='bg-[--textfff] mt-[2rem] pt-[30px] pb-[30px] pl-[50px] pr-[50px]'>
                            <Row>
                              <Col lg={8} className='p-0'>
                                <div className="flex items-center ">
                                  <div className="flex flex-col justify-center gap-y-4 p-[20px]">
                                    <div className="flex items-center">
                                      <h2 className='text-[#000] text-[20px] font-[600] capitalize'>{t("material")}</h2>
                                      <span className='pt-0 pb-0 pl-[10px] pr-[10px]'>-</span>
                                      <h3 className='text-[#000] pl-[10px] font-[300] text-[18px] capitalize'>{ml(cur?.material_az, cur?.material_ru, cur?.material_en)}</h3>
                                    </div>
                                    <div className="flex items-center">
                                      <h2 className='text-[#000] text-[20px] font-[600] capitalize'>{t("color")}</h2>
                                      <span className='pt-0 pb-0 pl-[10px] pr-[10px]'>-</span>
                                      <h3 className='text-[#000] pl-[10px] font-[300] text-[18px] capitalize'>{ml(cur?.reng_az, cur?.reng_ru, cur?.reng_en)}</h3>
                                    </div>
                                    <div className="flex items-center">
                                      <h2 className='text-[#000] text-[20px] font-[600] capitalize'>{t("usage")}</h2>
                                      <span className='pt-0 pb-0 pl-[10px] pr-[10px]'>-</span>
                                      <h3 className='text-[#000] pl-[10px] font-[300] text-[18px] capitalize'>{ml(cur?.istifade_az, cur?.istifade_ru, cur?.istifade_en)}</h3>
                                    </div>
                                    <div className="flex items-center">
                                      <h2 className='text-[#000] text-[20px] font-[600] capitalize'>{t("features")}</h2>
                                      <span className='pt-0 pb-0 pl-[10px] pr-[10px]'>-</span>
                                      <h3 className='text-[#000] pl-[10px] font-[300] text-[18px] capitalize'>{ml(cur?.xususiyyetler_az, cur?.xususiyyetler_ru, cur?.xususiyyetler_en)}</h3>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="flex items-center justify-center">
                                  <LazyLoadImage src={cur?.image_1} className='w-full h-[300px] object-contain' />
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} className='bg-[--bgef] mt-[2rem] pt-[30px] pb-[30px] pl-[50px] pr-[50px]'>
                            <Row className='items-start justify-start'>
                              <Col lg={4} >
                                <div className="flex items-start justify-start">
                                  <LazyLoadImage src={cur?.image_2} className='w-full h-[500px] object-contain  p-0 m-0' />
                                </div>
                              </Col>
                              <Col lg={4} >
                                <div className="flex items-center justify-center">
                                  <LazyLoadImage src={cur?.image_3} className='w-full h-[500px] object-contain ' />
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="flex flex-col w-full gap-[15px] overflow-hidden">
                                  <Col lg={12} className='flex items-center justify-center bg-[--textfff] w-full pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-center'>
                                    {ml(cur?.sbk2alt_az, cur?.sbk2alt_ru, cur?.sbk2alt_en)}
                                  </Col>
                                  <div className="flex w-full gap-x-[20px] justify-between h-full">
                                    <Col lg={4} className='flex items-center justify-center bg-[--textfff] pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-center'>
                                      {ml(cur?.sbk2_az, cur?.sbk2_ru, cur?.sbk2_en)}
                                    </Col>
                                    <Col lg={8} className='flex items-center justify-center bg-[--textfff] pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-center'>
                                      {ml(cur?.standart_az, cur?.standart_ru, cur?.standart_en)}
                                    </Col>
                                  </div>
                                  <div className="flex w-full gap-x-[20px] justify-between h-full">
                                    <Col lg={4} className='flex items-center justify-center bg-[--textfff] pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-center'>
                                      {ml(cur?.a_az, cur?.a_ru, cur?.a_en)}
                                    </Col>
                                    <Col lg={8} className='flex items-center justify-center bg-[--textfff] pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-center'>
                                      {ml(cur?.tavanda_eni_az, cur?.tavanda_eni_ru, cur?.tavanda_eni_en)}
                                    </Col>
                                  </div>
                                  <div className="flex w-full gap-x-[20px] justify-between h-full">
                                    <Col lg={4} className='flex items-center justify-center bg-[--textfff] pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-center'>
                                      {ml(cur?.l_az, cur?.l_ru, cur?.l_en)}
                                    </Col>
                                    <Col lg={8} className='flex items-center justify-center bg-[--textfff] pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-center'>
                                      {ml(cur?.tavanda_uzunlugu_az, cur?.tavanda_uzunlugu_ru, cur?.tavanda_uzunlugu_en)}
                                    </Col>
                                  </div>
                                  <div className="flex w-full gap-x-[20px] justify-between h-full">
                                    <Col lg={4} className='flex items-center justify-center bg-[--textfff] pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-center'>
                                      {ml(cur?.t1_az, cur?.t1_ru, cur?.t1_en)}
                                    </Col>
                                    <Col lg={8} className='flex items-center justify-center bg-[--textfff] pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-center'>
                                      {ml(cur?.tavanda_yuva_olcusu_eni_az, cur?.tavanda_yuva_olcusu_eni_ru, cur?.tavanda_yuva_olcusu_eni_en)}
                                    </Col>
                                  </div>
                                  <div className="flex w-full gap-x-[20px] justify-between h-full">
                                    <Col lg={4} className='flex items-center justify-center bg-[--textfff] pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-center'>
                                      {ml(cur?.t2_az, cur?.t2_ru, cur?.t2_en)}
                                    </Col>
                                    <Col lg={8} className='flex items-center justify-center bg-[--textfff] pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-center'>
                                      {ml(cur?.tavanda_yuva_olcusu_uzunlugu_az, cur?.tavanda_yuva_olcusu_uzunlugu_ru, cur?.tavanda_yuva_olcusu_uzunlugu_en)}
                                    </Col>
                                  </div>
                                  <div className="flex w-full gap-x-[20px] justify-between h-full">
                                    <Col lg={4} className='flex items-center justify-center bg-[--textfff] pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-center'>
                                      {ml(cur?.c_az, cur?.c_ru, cur?.c_en)}
                                    </Col>
                                    <Col lg={8} className='flex items-center justify-center bg-[--textfff] pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-center'>
                                      {ml(cur?.reng_sifarise_uygun_az, cur?.reng_sifarise_uygun_ru, cur?.reng_sifarise_uygun_en)}
                                    </Col>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} className='bg-[--textfff] mt-[2rem] pt-[30px] pb-[30px] pl-[50px] pr-[50px]'>
                            <div className="flex flex-col justify-start items-start">
                                <h2 className='font-[400] text-[25px] pb-[50px]'>{ml(cur?.iki_qanadli_barmaqliq_az,cur?.iki_qanadli_barmaqliq_ru,cur?.iki_qanadli_barmaqliq_en)}</h2>
                                <LazyLoadImage src={cur?.image_4} className=' w-[800px] ' />
                            </div>
                          </Col>
                          <Col lg={12} className='bg-[--bgef] mt-[2rem] pt-[30px] pb-[30px] pl-[50px] pr-[50px]'>
                            <div className="flex flex-col">
                                <h2 className='font-[400] text-[25px] pb-[50px]'>{ml(cur?.barmaqliq_secimi_cedveli_az,cur?.barmaqliq_secimi_cedveli_ru,cur?.barmaqliq_secimi_cedveli_en)}</h2>
                                <LazyLoadImage src={cur?.image_5} className='w-[1400px]' />
                            </div>
                          </Col>
                        </Row>
                      </TabPanel>
                    ))
                  }


                </TabPanels>
              </Tabs>


            </Row>
          </Container>
        </section>
      </m.div>
    </>
  )
}
export default ProductionSub
