import Layout from "./components/layout/Layout"
import Router from "./components/router"
import { useCallback, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import $ from 'jquery';
import Loader from "./components/loader/Loader";
import AOS from 'aos';
import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "./components/store/posts";
import "lightgallery.js/dist/css/lightgallery.css";
function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list)
  const [loading, setLoading] = useState(false)
  AOS.init({ once: true, });
  useEffect(useCallback(() => {
    dispatch(loadposts())
    setLoading(true)
   
    setTimeout(() => {
      setLoading(false)
    }, 2200);
  }, [dispatch]), [])

  return (
    <>
      {
        loading ? <Loader /> :
          <Layout data={data} >
            <Router data={data} />
          </Layout>
      }

    </>
  )
}

export default App
