import React from 'react'
import Breadcump from '../components/others/breadcump';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getMultiLang as ml } from '../components/MultiLang';

const About = ({ data }) => {
  const [t] = useTranslation("translation")
  console.log(data?.options?.about_page?.showroom_images)
  const about = data?.options?.about_page;
  const shoromimages = data?.options?.about_page?.showroom_images;
  return (
    <>
      <Breadcump data={data} />
      <section id="1" className=' bg-[--textfff] '>
        <Container maxWidth="2xl">
          <div className="pl-[50px] pr-[50px]">
            <Grid container spacing={10} >
              <Grid xs={6} className="flex justify-center flex-col">
                <h2 className='font-[700] text-[40px] text-[--text] mb-[30px] capitalize'>{t("about")}</h2>
                <div className='columns-2 flex flex-col gap-[40px] text-justify' dangerouslySetInnerHTML={{ __html: about && ml(about?.about_1_text_az, about?.about_1_text_ru, about?.about_1_text_en) }}></div>

              </Grid>
              <Grid xs={6}>
                <div className="p-[50px]">
                  <LazyLoadImage src={about?.about_1_img} className='w-full' />
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
      <section id="2" className='pt-20'>
     
        <Container maxWidth="2xl">
        
          <div className="pl-[50px] pr-[50px]">
          <h2 className='font-[700] text-[40px] text-[--text] mb-3  capitalize'>{t("shoroom")}</h2>
            <Grid container  >
              {
                shoromimages && shoromimages?.map((cur, i) => (
                  <Grid xs={4} key={i} className="p-[10px!important]">
                    <LazyLoadImage src={cur?.images} className='w-full h-full' />
                  </Grid>
                ))
              }

            </Grid>
          </div>
        </Container>
      </section>
    </>
  )
}

export default About
