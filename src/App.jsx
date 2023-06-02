import Layout from "./components/layout/Layout"
import Router from "./components/router"
import { useCallback, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import $ from 'jquery';
import Loader from "./components/loader/Loader";

function App() {

  useEffect(useCallback(() => {
      function pageLoading(){
        setTimeout(() => {
          $('.loader1').css('visibility', 'hidden')
        }, 1800);
      }
      pageLoading()
  }, []), [])

  return (
    <>
    <Loader />
      <Layout >
        <Router />
      </Layout>
    </>
  )
}

export default App
