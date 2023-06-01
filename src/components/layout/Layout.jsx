import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = ({children,data}) => {
  return (
    <>
      <Header data={data} />
        {children}
      <Footer data={data} />
    </>
  )
}

export default Layout
