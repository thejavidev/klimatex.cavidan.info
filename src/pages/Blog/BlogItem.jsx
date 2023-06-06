import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getMultiLang as ml } from '../../components/MultiLang';
import { useParams } from 'react-router';


const BlogItem = ({ data }) => {
  const [t] = useTranslation("translation");
  const pagebanner = data?.options?.pagetopbanner;
  const { slug_az } = useParams()
  const blogall = data?.blogall;
  const currentPost = blogall?.find((post) => post?.slug_az == slug_az);
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
            <h2 className='absolute top-[65%] left-[50%] z-5 text-[--textfff] text-[40px] font-[200] capitalize transfrom70'>{t("blog")}</h2>
          </div>
        </div>
        <section id="1">
          <Container fluid className='pt-[60px] bg-[--bgef] min-h-[55vh] pb-[60px] pl-[100px] pr-[100px] lg:pl-[20px] lg:pr-[20px] relative'>
            <Col lg={12} className='pb-[40px]'>
              <LazyLoadImage src={currentPost?.cover} className='w-full h-[500px]' />
            </Col>
            <Col lg={12} className='flex flex-col justify-center h-full'>
              <div className="blog">
                <div dangerouslySetInnerHTML={{ __html: currentPost?.title_az && ml(currentPost?.title_az, currentPost?.title_ru, currentPost?.title_en) }}>
                </div>
              </div>
              <div className="pt-[30px] pb-[30px]">
                <div className=' text-justify' dangerouslySetInnerHTML={{ __html: currentPost?.text_az && ml(currentPost?.text_az, currentPost?.text_ru, currentPost?.text_en) }}></div>
              </div>
            </Col>
          </Container>
        </section>
      </m.div>
    </>
  )
}

export default BlogItem
