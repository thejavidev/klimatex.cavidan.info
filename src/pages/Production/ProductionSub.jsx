import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../../components/MultiLang';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useState } from 'react';

const ProductionSub = ({ data }) => {
  const [t] = useTranslation("translation");
  const pagebanner = data?.options?.pagetopbanner;

  const { slug_az } = useParams();
  const production = data?.istehsalat;
  const currentPost = production?.find((post) => post?.slug_az === slug_az);
  const currentItem = currentPost?.products;



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
            <h2 className='absolute top-[65%] left-[50%] z-5 text-[--textfff] text-[40px] font-[200] capitalize transfrom70'>{t("production")}</h2>
          </div>
        </div>
        <section id="1" className='pt-[60px] bg-[--bgef] min-h-[55vh] pb-[60px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] relative'>
          <Container fluid>
            <Row>
              {
                currentItem && currentItem?.map((cur, i) => (
                  <Col key={i} xl={2} lg={3} md={4} sm={6} xs={12} >
                    <Link to={`${cur?.istehsalat_category_id}`}>
                      <ProductCard image={cur?.src} text={ml(cur?.name_az, cur?.name_ru, cur?.name_en)} />
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
export default ProductionSub
