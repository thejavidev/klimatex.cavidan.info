import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { loadposts } from '../store/posts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import { getMultiLang as ml } from '../MultiLang';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { corn_logo, klimatex_black } from '../../assets';

const Footer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list)

  const api = [
    {
      id: 0,
      tel1: data?.options?.options?.tel1,
      tel2: data?.options?.options?.tel2,
      map_az: data?.options?.options?.unvan_az,
      map_ru: data?.options?.options?.unvan_ru,
      map_en: data?.options?.options?.unvan_en,
      mail: data?.options?.options?.email
    }
  ]
  const year = new Date().getUTCFullYear();
  const onTop = () => {
    window.scrollTo(0, 0)
  }

  const [t] = useTranslation("translation")
  useEffect(() => {
    dispatch(loadposts())
  }, [dispatch]);
  return (
    <>
      <footer>
        <div className="w-full bg-[--bgred] pt-2 pb-2 pl-[100px] pr-[100px]">
          <Row>
            <Col lg={8}>
              <Row className='items-center'>
                <Col lg={3}>
                  <div className="flex items-center">
                    <LocalPhoneIcon sx={{ fontSize: 30 }} className='text-[#fff]' />
                    <div className="flex flex-col ml-2">
                      <a className='text-[#fff]' href={`tel:${api[0]?.tel1}`}>{api[0]?.tel1}</a>
                      <a className='text-[#fff]' href={`tel:${api[0]?.tel2}`}>{api[0]?.tel2}</a>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="flex items-center">
                    <AddLocationIcon sx={{ fontSize: 30 }} className='text-[#fff] mr-2' />
                    <span className='text-[#fff]'>{ml(api[0]?.map_az, api[0]?.map_ru, api[0]?.map_en)}</span>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="flex items-center">
                    <EmailIcon sx={{ fontSize: 30 }} className='text-[#fff] mr-2' />
                    <a className='text-[#fff]' href={`mailto:${api[0]?.mail}`}>{api[0]?.mail}</a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="w-full bg-[--footer] flex justify-between pt-4 pb-3 pl-[100px] pr-[100px]">
          <div className="" onClick={onTop}>
            <LazyLoadImage src={klimatex_black} className='cursor-pointer w-[120px]' />
          </div>
          <div className="flex items-center gap-4">
            <p className='text-[#fff] uppercase'>{t("huquq")} - {year}</p>
            <div>
              <a href="https://corn.az" target='_blank'>
                <LazyLoadImage src={corn_logo} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
