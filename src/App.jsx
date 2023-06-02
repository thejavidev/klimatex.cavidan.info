import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/layout/Layout"
import Router from "./components/router"
import { useCallback, useEffect } from "react";
import { loadposts } from "./components/store/posts";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import $ from 'jquery';
import Loader from "./components/loader/Loader";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list)
  useEffect(useCallback(() => {
      dispatch(loadposts())
      function pageLoading(){
        setTimeout(() => {
          $('.loader1').css('transform', 'translate(0%, 0%) scale(0)')
         
        }, 2200);
      }
      pageLoading()
  }, [dispatch]), [])



  return (
    
    <>
    <Loader />
      <Layout data={data?.options?.options}>
        <Router data={data} />
      </Layout>
    </>
  )
}

export default App
