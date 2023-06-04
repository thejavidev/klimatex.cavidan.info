import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink, useParams } from 'react-router-dom';
import { getMultiLang as ml } from '../components/MultiLang';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';


const Distributor = ({ data }) => {
  const [t] = useTranslation("translation");
  const pagebanner = data?.options?.pagetopbanner;
  const distribution = data?.distrubition;

  const { id } = useParams();
  const { distribusiya_one_id } = useParams();
  const currentPost = distribution?.find((post) => post?.id == id);
  const currentItem = currentPost?.sub_categories

  const currentPost2 = currentItem?.find((post) => post?.distribusiya_two_id == distribusiya_one_id);
  const currentItem2 = currentPost2?.products;

 

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
            <h2 className='absolute top-[65%] left-[50%] z-5 text-[--textfff] text-[40px] font-[200] capitalize transfrom70'>{t("distribution")}</h2>
          </div>
        </div>
        <section id="1" className='pt-[60px] bg-[--bgef] min-h-[155vh] pb-[60px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] relative'>
          <Container fluid >
            <Row className=''>
              {
                distribution && distribution?.map((cur, i) => (
                  <Col lg={2} key={i} className="  ">
                    <NavLink to={`/distributor/${cur?.id}`} className='bg-[--textfff] distribution w-full flex justify-center mb-[20px] pt-[10px] pb-[10px]'>
                      <LazyLoadImage src={cur?.src} className=' h-[30px]' />
                    </NavLink>
                  </Col>
                ))
              }
              <div className='mt-[20px]'>
                {
                  currentItem && currentItem?.map((cur, i) => (
                    <div className='' key={i} >
                      <NavLink className='bg-[--textfff]'>
                        <h2 className=''>{ml(cur?.name_az, cur?.name_ru, cur?.name_en)}</h2>
                      </NavLink>
                    </div>
                  ))
                }
                <Tabs>
                  {
                    currentItem2 && currentItem2?.map((cur, i) => (
                      <TabList key={i} className='tab2n flex overflow-hidden flex-wrap pt-[60px] pb-[60px] pl-[100px] pr-[100px]'>
                        <Tab>
                          <Col lg={8}>
                            <div className="flex flex-col justify-evenly h-full pt-0 pb-0 pr-[50px] pl-0">
                              <h2 className='font-[600] text-[40px] text-[--text] pb-[30px]'>{ml(cur?.title_az, cur?.title_ru, cur?.title_en)}</h2>
                              <div dangerouslySetInnerHTML={{ __html: cur?.text_az && ml(cur?.text_az, cur?.text_ru, cur?.text_en) }}></div>
                            </div>
                          </Col>
                          <Col lg={4}>
                            <LazyLoadImage src={cur?.src} />
                          </Col>
                        </Tab>

                      </TabList>

                    ))
                  }

                </Tabs>
              </div>
            </Row>
          </Container>
        </section>
      </m.div>
    </>
  )
}

export default Distributor
