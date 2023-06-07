
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { kl_logo } from '../../assets'
import { Link, NavLink } from 'react-router-dom';
import Upper from './Upper';
import SearchIcon from '@mui/icons-material/Search';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import $ from 'jquery';
import { Container } from 'react-bootstrap';
import { useRef } from 'react';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';


const Header = ({data}) => {
  const tel1 = data?.options?.options?.tel1;
  const str = tel1?.replace(/\s/g, '');
  const facebook = data?.options?.options?.facebook;
  const instagram = data?.options?.options?.instagram;
  const youtube = data?.options?.options?.youtube;
  const [t, i18n] = useTranslation("translation");
  const openMobileHeader =useRef();
  const OverlayDiv =useRef();
  const menu = [
    {
      id: 1,
      path: "/",
      name: `${t('home')}`,
    },
    {
      id: 2,
      path: "/about",
      name: `${t('about')}`,
    },
    {
      id: 3,
      path: "/service/layihelendirme",
      name: `${t('service')}`,
    },
    {
      id: 4,
      path: "/project",
      name: `${t('project')}`,
    },
    {
      id: 5,
      path: "/production",
      name: `${t('production')}`,
    },
    {
      id: 6,
      path: "/distributor/15",
      name: `${t('distribution')}`,
    },
    {
      id: 7,
      path: "/license",
      name: `${t('license')}`,
    },
    {
      id: 8,
      path: "/blog",
      name: `${t('blog')}`,
    },
    {
      id: 9,
      path: "/contact",
      name: `${t('contact')}`,
    },
  ]
  const openMenu = () => {
    openMobileHeader?.current?.classList?.add('open-header');
    OverlayDiv?.current?.classList?.add('active');
  }
  const CloseMenu = () => {
    openMobileHeader?.current?.classList?.remove('open-header');
    OverlayDiv?.current?.classList?.remove('active');
  }
  const [open, setOpen] = useState(false);
  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
    setOpen(false);
  }
  const langChecker = useCallback((lang = "az") => {
    return lang !== localStorage.getItem("i18nextLng")
  }, [])
  const langs = ["az", "ru", "en"];
  const myLang = langs?.filter(langChecker);


  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 100) { // if scroll down hide the navbar
        $('.topmenu').addClass('hidden')
        $('.header').removeClass('absolute')
        $('.header').addClass('fixed')
        $('.header').addClass('nopadding');
      } else { // if scroll up show the navbar
        $('.topmenu').removeClass('hidden')
        $('.header').removeClass('fixed')
        $('.header').addClass('absolute')
        $('.header').removeClass('nopadding');
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
   
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
     <div onClick={CloseMenu} ref={OverlayDiv} className="mobile-menu-overlay  block fixed left-[0] top-[0] bottom-[0] right-[0] z-[100] overlay"></div>
      <header className={`header absolute top-0 left-0 right-0 w-full z-[100]  pl-[100px] pr-[100px] xl:pl-[50px] xl:pr-[50px] lg:pl-[20px] lg:pr-[20px]`}>
        <Container fluid >
          <div className={`topmenu w-full flex justify-between bg-transparent pt-[20px] pb-[5px] pl-2 pr-2`}>
            <div className="flex items-center">
              {<Upper
                toggle={() => setOpen(!open)}
                switchLang={
                  open && (
                    <div className="absolute  mt-6 right-[10px] top-2 h-[50px] flex flex-col text-left items-end">
                      {myLang.map((lang, index) => (
                        <button className='text-[--text] lowercase text-[18px] xl:text-[13px] transitions bg-[#ccc] hover:text-[#DE0733] pt-[10px] pb-[10px] pr-[15px] pl-[15px]' key={index} onClick={() => clickHandle(lang)} >
                          {lang}
                        </button>
                      ))}
                    </div>
                  )}
              />}
              <div className="cursor-pointer">
                <SearchIcon sx={{ fontSize: 22 }} />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="">
                <a href={`tel:${str}`} className='text-[--textfff] text-[14px]'><LocalPhoneIcon fontSize="medium" className='bg-[--textsky] rounded-full text-[--textfff] p-[5px]' /> {tel1} </a>
              </div>
              <ul className='flex items-center gap-3'>
                <li>
                  <Link to={facebook}>
                    <FacebookIcon className='text-[--textfff]' sx={{ fontSize: 22 }} />
                  </Link>
                </li>
                <li>
                  <Link to={instagram}>
                    <InstagramIcon className='text-[--textfff]' sx={{ fontSize: 22 }} />
                  </Link>
                </li>
                <li>
                  <Link to={youtube}>
                    <YouTubeIcon className='text-[--textfff]' sx={{ fontSize: 22 }} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <nav className='flex flex-wrap justify-between w-full pt-[10px] pb-[10px] pl-[10px] pr-[10px] bg-[--textfff]'>
            <div className="flex justify-center items-center  cursor-pointer">
              <Link to={'/'}>
                <LazyLoadImage src={kl_logo} className='w-[120px]' />
              </Link>
            </div>
            <div className="">
              <div className="hidden lg:flex" onClick={openMenu}>
                  <AiOutlineMenu className='text-[25px] mr-2 cursor-pointer' />
              </div>
              <ul ref={openMobileHeader} className='flex items-center justify-end w-full lg:fixed mobileHeader tansitionheader
              lg:right-[-100%] lg:flex-col lg:w-[300px] lg:bg-[--header] lg:p-[30px] lg:h-full lg:top-[0] lg:justify-start lg:pt-[50px]'>
                <div className="hidden lg:flex" >
                  <AiOutlineClose  className='text-[25px] text-[#fff] mr-2 cursor-pointer absolute right-[15px] top-[15px]' onClick={CloseMenu} />
                </div>
                {
                  menu && menu?.map((cur, i) => (
                    <li key={i} className='pt-[10px] pb-[10px] pl-0 pr-0 ml-[20px] lg:ml-[10px]'>
                      <NavLink onClick={CloseMenu} to={cur?.path} className='text-[--text] capitalize relative text-[14px] lg:text-[#fff]'>
                        {cur?.name}
                      </NavLink>
                    </li>

                  ))
                }
              </ul>
            </div>
          </nav>
        </Container>
      </header>
    </>
  )
}

export default Header
