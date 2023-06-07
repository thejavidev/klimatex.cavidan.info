import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const DistributorCard = ({name,textlong,srcImg,titleh2}) => {
    return (
        <>
            <TabPanels className='tab2n mb-[40px] md:mb-[10px] pb-[60px] md:pb-[10px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px]' >
                <TabPanel >
                    <Row className='items-center row2n'>
                        <Col lg={6} >
                            <div className='flex flex-col pb-[30px] items-start'><h4 className='capitalize text-[21px] md:text-[16px] mr-[10px]'>{name} - </h4>  <h2 className='font-[600] text-[40px] md:text-[25px] md:mt-[20px]'>{titleh2}</h2></div>
                            <div dangerouslySetInnerHTML={{ __html: textlong }}></div>
                        </Col>
                        <Col lg={6} className='md:mt-3'>
                            <LazyLoadImage src={srcImg} className='h-[400px] md:h-full  w-full object-contain mix-blend-multiply md:object-cover' />
                        </Col>
                    </Row>
                </TabPanel>
            </TabPanels>
        </>
    )
}

export default DistributorCard
