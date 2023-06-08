import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion as m } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';


const Spiner =()=>{
  return(
    <>
      <div class="spiper-loader"></div>
    </>
  )
}

const Contact = ({ data }) => {
  const [t] = useTranslation("translation");
  const pagebanner = data?.options?.pagetopbanner;
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value, message, phone, email } = e.target;
    setForm({ ...form, [name]: value, [message]: value, [phone]: value, [email]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_gni2aaf', 'template_1q9a0vs',
      {
        form_name: form.name,
        to_name: 'Klimatex',
        form_email: form.email,
        to_email: 'klimatex@corn.az',
        message: 
          'Müstərinin adı: ' + form.name + ' \n' + ' Müştərinin email adresi : ' +
          form.email + ' \n' + ' Müştərinin telefon nömrəsi : ' +
          form.phone + ' \n' + ' Müştərinin tam ismarıcı : ' + form.message
      },
      '1ALt4vmWjs9kM8jar',
    )
      .then(() => {
        setLoading(false);
        Swal.fire(`${t('swal1')}`,`${t('swal2')}`, "success");

        setForm({
          name: '',
          phone: '',
          email: '',
          message: ''
        }, (error) => {
          setLoading(false)
          console.log(error)
          alert('xeta bas verdi')
        })
      })
  }
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
            <h2 className='absolute top-[65%] left-[50%] z-5 text-[--textfff] text-[40px] lg:text-[25px] font-[200] capitalize transfrom70'>{t("contact")}</h2>
          </div>
        </div>
        <section id='1' className='pt-[60px] bg-[--bgef] min-h-[55vh] pb-[60px] pl-[50px] pr-[50px] lg:pl-[20px] lg:pr-[20px] relative'>
          <Container fluid>
            <Row>
              <form className='flex flex-wrap w-full lg:justify-center' onSubmit={handleSubmit} ref={formRef}>
                <Row className='w-full '>
                  <Col lg={4} className='lg:mb-[20px] lg:p-0'>
                    <div className="w-full">
                      <input type="text"
                      value={form.name} required
                      onChange={handleChange}
                      name='name'
                      placeholder='Ad,soyad' className='w-full bg-[--textfff] outline-none shadow-none border-none caret-[#ff0000] pt-[15px] pb-[15px] pl-[20px] pr-[20px] text-[18px]' />
                    </div>
                  </Col>
                  <Col lg={4} className='lg:mb-[20px] lg:p-0'>
                    <div className="w-full">
                      <input type="text"
                       value={form.email} required
                       onChange={handleChange}
                       name='email'
                      placeholder='E-mail' className='w-full bg-[--textfff] outline-none shadow-none border-none caret-[#ff0000] pt-[15px] pb-[15px] pl-[20px] pr-[20px] text-[18px]' />
                    </div>
                  </Col>
                  <Col lg={4} className='lg:p-0'>
                    <div className="w-full ">
                      <input type="text" 
                       value={form.phone} required
                       onChange={handleChange}
                       name='phone'
                      placeholder='Nömrə' className='w-full bg-[--textfff] outline-none shadow-none border-none caret-[#ff0000] pt-[15px] pb-[15px] pl-[20px] pr-[20px] text-[18px]' />
                    </div>
                  </Col>
                  <Col lg={12} className='lg:p-0'>
                    <div className='mt-[40px]'>
                      <textarea placeholder='Mesaj'
                       value={form.message} required
                       name="message"
                       onChange={handleChange}
                      className='w-full outline-none shadow-none border-none resize-none h-[300px] caret-[#ff0000] pt-[15px] pb-[15px] pl-[20px] pr-[20px] text-[18px] '></textarea>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className='flex items-center justify-center mt-[30px] '>
                      <button className='bg-[--textfff]  w-max pl-[40px] pr-[40px] pt-[10px] pb-[10px]'>  {loading ? <Spiner /> : (t('send'))}</button>
                    </div>
                  </Col>
                </Row>
              </form>
            </Row>
          </Container>
        </section>
      </m.div>
    </>
  )
}

export default Contact
