import Layout from "./components/layout/Layout"
import Router from "./components/router"
import { useCallback, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import $ from 'jquery';
import Loader from "./components/loader/Loader";
import AOS from 'aos';
import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "./components/store/posts";
function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list)
  AOS.init({ once: true, });
  useEffect(useCallback(() => {
    dispatch(loadposts())
    function pageLoading() {
      setTimeout(() => {
        $('.loader1').css('visibility', 'hidden')
      }, 1800);
    }
    pageLoading()
  }, [dispatch]), [])

  return (
    <>
      <Loader />
      <Layout >
        <Router data={data} />
      </Layout>
    </>
  )
}

export default App
