import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../../components/MultiLang';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';




const ProductionItem = ({ data }) => {
  const [t] = useTranslation("translation");
  const pagebanner = data?.options?.pagetopbanner;

  const { slug_az } = useParams();
  const production = data?.istehsalat;
  const currentPost = production?.find((post) => post?.slug_az === slug_az);
  useEffect(()=>{
    console.log('slug=>',slug_az)
    console.log('production=>',production?.[1]?.sub_categories)
    console.log('currentPost=>',currentPost)
  },[])

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
      </m.div>
    </>
  )
}

export default ProductionItem
