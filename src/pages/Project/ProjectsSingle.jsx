import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../../components/MultiLang';
import { motion as m } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LightgalleryItem } from "react-lightgallery";

const ProjectsSingle = ({ data }) => {
  const pagebanner = data?.options?.pagetopbanner;
  const [t] = useTranslation("translation");

  const { slug_az } = useParams();
  const projects = data?.layihe;
  const currentPost = projects?.find((post) => post?.slug_az === slug_az);
  const currentItem =currentPost?.images;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <m.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.75, ease: "easeOut" }}>
        <div className="relative w-full breadcump">
          <LazyLoadImage src={pagebanner} className='w-full h-[395px]' />
          <div className="" >
            <h2 className='absolute top-[65%] left-[50%] z-5 text-[--textfff] text-[40px] font-[200] capitalize transfrom70'>{t("project")}</h2>
          </div>
        </div>

        <section id="1" className='pt-[50px] pb-[50px] min-h-[70vh]'>
          <Container fluid className='pl-[100px] pr-[100px]'>
            <h2 className='font-[600] text-[40px] pb-[40px]'>{ml(currentPost?.name_az,currentPost?.name_ru,currentPost?.name_en)}</h2>
            <Row className=''>
              {
                currentItem && currentItem?.map((cur, i) => (
                  <Col lg={4} key={i} className='pb-[20px]'>
                    <LightgalleryItem group="any" src={cur?.src}>
                      <a className='cursor-zoom-in'>
                        <LazyLoadImage src={cur?.src} />
                      </a>
                    </LightgalleryItem>
                    
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

export default ProjectsSingle
