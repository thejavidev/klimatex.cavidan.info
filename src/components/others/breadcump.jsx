import React from 'react'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Breadcump = ({data}) => {

  const pagebanner = data?.options?.pagetopbanner;
  const [t] = useTranslation("translation")
  return (
    <>
      <div className="relative w-full breadcump">
        <LazyLoadImage src={pagebanner} className='w-full h-[395px] lg:h-[230px]' />
        <div className="" >
          <h2 className='absolute top-[65%] left-[50%] z-5 text-[#fff] text-[40px] lg:text-[25px] font-[200] capitalize transfrom70'>{t("about")}</h2>
        </div>
      </div>
    </>
  )
}

export default Breadcump
