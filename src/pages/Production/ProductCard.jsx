import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ProductCard = ({ image,text,}) => {
    return (
        <>
            <div className="flex justify-center flex-col h-full w-full cursor-pointer productionimg">
                <div className="top ">
                    <LazyLoadImage src={image} className='w-full tansitionall2 h-[200px]' />
                </div>
                <div className="h2 mt-[20px] bg-[#fff] flex items-center justify-center pt-[10px] pb-[10px] pl-[30px] pr-[30px] text-center tansitionall2 ">
                    <h2 className='text-[16px]'>{text}</h2>
                </div>
            </div>
        </>
    )
}

export default ProductCard
