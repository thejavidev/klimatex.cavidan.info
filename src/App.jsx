import Layout from "./components/layout/Layout"
import Router from "./components/router"
import { createContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import Loader from "./components/loader/Loader";
import AOS from 'aos';
import "lightgallery.js/dist/css/lightgallery.css";
import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "./components/store/posts";
export const ThemeContext = createContext(null);

function App() {
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const data = useSelector((state) => state.list)

  AOS.init({ once: true, });
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500);
  },[])


  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(loadposts())
    console.clear();
  }, [dispatch]);


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
