import React from 'react'
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';

import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './components/transitions/index.js';
import { HelmetProvider  } from 'react-helmet-async';
import { LightgalleryProvider } from "react-lightgallery";
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css';
import 'aos/dist/aos.css';
import { RecoilRoot } from 'recoil';



const defaultLanguage = ["az"]
i18next.use(LanguageDetector, initReactI18next,).init({
  resources,
  fallbackLng: defaultLanguage,
  interpolation: { escapeValue: true },
  lng: window.localStorage.getItem('i18nextLng'),
  debug: false,
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <I18nextProvider i18n={i18next}>
        <LightgalleryProvider>
          <ChakraProvider>
            <HelmetProvider>
              <RecoilRoot>
                <App />
              </RecoilRoot>
            </HelmetProvider>
          </ChakraProvider>
        </LightgalleryProvider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
