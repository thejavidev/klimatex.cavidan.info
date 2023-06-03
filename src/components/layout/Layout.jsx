import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { AnimatePresence } from 'framer-motion'

const Layout = ({ children,data }) => {
  return (
    <>
      <Header data={data} />
        <AnimatePresence >
          {children}
        </AnimatePresence>
      <Footer />
    </>
  )
}

export default Layout
