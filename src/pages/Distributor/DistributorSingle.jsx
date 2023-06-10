import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, useParams } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { getMultiLang as ml } from '../../components/MultiLang';
import DistributorCard from './DistributorCard';
import Brends from '../Brends';

const DistributorSingle = ({ data }) => {
    const pagebanner = data?.options?.pagetopbanner;
    const [t] = useTranslation("translation");
    const { distribusiya_one_id } = useParams();
    const distribution = data?.distrubition;
    const brend = data?.brend;
    const currentPost = distribution?.find((post) => post?.id == distribusiya_one_id);
    const currentItem = currentPost?.sub_categories;

    // console.log(distribusiya_one_id)
    // console.log(currentItem)
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
                    <LazyLoadImage src={pagebanner} className='w-full h-[395px] lg:h-[230px]' />
                    <div className="" >
                        <h2 className='absolute top-[65%] left-[50%] z-5 text-[#fff] text-[40px] lg:text-[25px] font-[200] capitalize transfrom70'>{t("distribution")}</h2>
                    </div>
                </div>
                <section className='pt-[60px] bg-[--bgef] min-h-[55vh]  relative'>
                    <Tabs variant="unstyled">
                        {
                            currentItem && currentItem?.map((cur) => {
                                const item = cur?.products;
                                const name=cur?.name_az;
                                return (
                                    item && item?.map((cur, i) => {
                                        return (
                                            <DistributorCard key={i} name={name} textlong={cur && ml(cur?.text_az, cur?.text_ru, cur?.text_en) } srcImg={cur?.src} titleh2={ml(cur?.title_az,cur?.title_ru,cur?.title_en)} />
                                            
                                        )
                                    })
                                )
                            })
                        }


                    </Tabs>
                    <Brends brend={brend} />

                </section>
                
              
            </m.div>
        </>
    )
}

export default DistributorSingle
