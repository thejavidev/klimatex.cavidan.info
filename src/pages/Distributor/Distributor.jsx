import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink, useParams } from 'react-router-dom';
import { getMultiLang as ml } from '../../components/MultiLang';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const Distributor = ({ data }) => {
  const [t] = useTranslation("translation");
  const pagebanner = data?.options?.pagetopbanner;
  const distribution = data?.distrubition;

  const { id } = useParams()



  const currentPost = distribution?.find((post) => post?.id == id);
  const subcategories = currentPost?.sub_categories;

  const currentPost2 = subcategories?.find((post) => post?.distribusiya_one_id == id);
  const currentProducts = currentPost2?.products;


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
            <h2 className='absolute top-[65%] left-[50%] z-5 text-[--textfff] text-[40px] font-[200] capitalize transfrom70'>{t("distribution")}</h2>
          </div>
        </div>
        <section id="1" className='pt-[60px] bg-[--bgef] min-h-[55vh] pb-[60px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] relative'>
          <Container fluid >
            <Row className=''>
              {
                distribution && distribution?.map((cur, i) => (
                  <Col key={i} lg={2} className='mb-[20px]'>
                    <NavLink
                      className='distribution w-full bg-[--textfff] flex h-full justify-center items-center pt-[20px] pb-[20px]'
                      to={`/distributor/${cur?.id}`} >
                      <LazyLoadImage className='w-auto h-[30px]' src={cur?.src} />
                    </NavLink>
                  </Col>
                ))
              }
              <div>
                {
                  subcategories && subcategories?.map((cur, i) => (
                    <Link to={`${cur?.id}`} key={i}> {ml(cur?.name_az, cur?.name_ru, cur?.name_en)}</Link>
                  ))
                }
              </div>
            </Row>
          </Container>
        </section>
      </m.div>
    </>
  )
}

export default Distributor