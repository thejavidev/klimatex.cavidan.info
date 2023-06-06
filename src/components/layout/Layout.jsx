import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { Helmet,HelmetProvider  } from 'react-helmet-async';

const Layout = ({ children,data }) => {
  const [t] = useTranslation("translation");
  const sitelang =localStorage.getItem("i18nextLng");
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <html lang={sitelang} />
      </Helmet>
    </HelmetProvider>
      <Header data={data} />
        <AnimatePresence >
          {children}
        </AnimatePresence>
      <Footer />
    </>
  )
}

export default Layout
