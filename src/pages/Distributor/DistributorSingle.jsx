import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, useParams } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";

const DistributorSingle = ({ data }) => {
    const [t] = useTranslation("translation");
    const { id } = useParams()
    const pagebanner = data?.options?.pagetopbanner;
    const distributions = data?.distrubition;

    const currentPost = distributions?.find((post) => post?.distribusiya_one_id === id);
    // console.log(id)
    // console.log(currentPost?.sub_categories)

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
                <section className='pt-[60px] bg-[--bgef] min-h-[55vh] pb-[60px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] relative'>

                </section>


            </m.div>
        </>
    )
}

export default DistributorSingle
