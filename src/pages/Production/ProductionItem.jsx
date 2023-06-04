import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../../components/MultiLang';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'



const ProductionItem = ({ data }) => {
  const [t] = useTranslation("translation");
  const pagebanner = data?.options?.pagetopbanner;

  const { istehsalat_category_id } = useParams();
  const production = data?.istehsalat;
  const currentPost = production?.find((post) => post?.id == istehsalat_category_id);
  const currentItem = currentPost?.products;
  useEffect(() => {
    console.log('slug=>', istehsalat_category_id)
    console.log('currentPost=>', currentPost)
  }, [])
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
            <h2 className='absolute top-[65%] left-[50%] z-5 text-[--textfff] text-[40px] font-[200] capitalize transfrom70'>{t("production")}a2a</h2>
          </div>
        </div>
        <section className='pt-[60px] bg-[--bgef] min-h-[55vh] pb-[60px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] relative'>
          <Container fluid>
            <Row >


              <Tabs variant='unstyled' className=' flex items-center justify-center '>
                <Row className='justify-center items-center'>
                  <TabList className='flex items-center justify-center  bg-[--textfff]'>
                    {
                      currentItem && currentItem?.map((cur, i) => (
                        <Tab _selected={{ color: 'white', bg: 'blue.500' }} key={i}>{cur?.name_az}</Tab>
                      ))
                    }
                  </TabList>
                </Row>
                <TabPanels>
                  {
                    currentItem && currentItem?.map((cur, i) => (
                      <TabPanel key={i}>
                        <Row>
                          <Col lg={12}>
                          <p>{cur?.standart_az}</p>
                         <LazyLoadImage src={cur?.src} />
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

export default ProductionItem
