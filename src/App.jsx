import Layout from "./components/layout/Layout"
import Router from "./components/router"
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import Loader from "./components/loader/Loader";
import AOS from 'aos';
import "lightgallery.js/dist/css/lightgallery.css";
import { atom,useRecoilState } from 'recoil';

const reposstate= atom({
  key:"repos",
  default:[]
})
function App() {

  const [loading, setLoading] = useState(false)
  AOS.init({ once: true, });


  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500);
  },[])

  const [respos,setRepos]=useRecoilState(reposstate);
  useEffect(() => {
    window.scrollTo(0, 0);
    const getRepos = async() =>{
      const url=(`${import.meta.env.VITE_API}/alldata`);
      const resp=await fetch(url);
      const body =await resp.json();
      setRepos(body)
    };
    getRepos()
  }, []);


  return (
    <>
      {
        loading ? <Loader /> :
          <Layout data={respos} >
            <Router data={respos} />
          </Layout>
      }

    </>
  )
}

export default App
