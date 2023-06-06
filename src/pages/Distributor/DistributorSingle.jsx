import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, useParams } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";
import { useState } from 'react';

const DistributorSingle = ({ data }) => {
    const [t] = useTranslation("translation");
    const { id } = useParams();
    
    const pagebanner = data?.options?.pagetopbanner;
    const distribution = data?.distrubition;

    const currentPost = distribution?.find((post) => post?.id == id);
    const subcategories = currentPost?.sub_categories;
 
    const currentPost2 = subcategories?.find((post) => post?.distribusiya_one_id == id);
    const id2=currentPost2?.id;
    const currentPost2Product =currentPost2?.products;
    const currentPost3 = currentPost2Product?.find((post) => post?.distribusiya_two_id == id2);

    console.log(id)
    console.log(id2)
    console.log(currentPost2Product)
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
                    {currentPost2Product && currentPost2Product?.map((cur,i)=>(
                        <div key={i}>
                                {
                                    cur?.title_az
                                }

                        </div>
                    ))}
                </section>


            </m.div>
        </>
    )
}

export default DistributorSingle
