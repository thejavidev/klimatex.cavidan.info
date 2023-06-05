import React from 'react'
import { useParams } from 'react-router';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';


const DistributorItem = ({ data }) => {
    const [t] = useTranslation("translation");
    const pagebanner = data?.options?.pagetopbanner;
    // const currentPost2 = currentItem?.find((post) => post?.distribusiya_two_id == distribusiya_one_id);
    // const currentItem2 = currentPost2?.products;

    const { id } = useParams();
    const distribution = data?.distrubition;
    const currentPost = distribution?.find((post) => post?.id == id);
    const currentItem = currentPost?.sub_categories;


   
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

                <div>
                    {
                        currentItem && currentItem?.map((cur, i) => (
                            <NavLink to={`${cur?.id}`} key={i}>
                                {cur?.name_az}
                            </NavLink>
                        ))
                    }
                </div>
            </m.div>
        </>
    )
}

export default DistributorItem
