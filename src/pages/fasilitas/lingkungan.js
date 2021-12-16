import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ImageGallery from 'react-image-gallery';


import 'react-tabs/style/react-tabs.css';
import "react-image-gallery/styles/css/image-gallery.css";
import {
  containerfas,
  heading,
  navLinks,
  navLinkItem,
  contentLinkText,
  navstyle,
  allpage,
  relaxfont,
  handwrite,
  centerbox,
} from '../../components/page.module.css'

const images = [
  {
    original: 'https://drive.google.com/uc?id=1hb9FkmXc4dEc2D_K2rnz_JP-UjfK510L',
    thumbnail: 'https://drive.google.com/uc?id=1hb9FkmXc4dEc2D_K2rnz_JP-UjfK510L',
  },
  {
    original: 'https://drive.google.com/uc?id=12XEuqRdB7aQggiUISUyjP_zdCVinIbAr',
    thumbnail: 'https://drive.google.com/uc?id=12XEuqRdB7aQggiUISUyjP_zdCVinIbAr',
  },
  {
    original: 'https://drive.google.com/uc?id=1f8DFtCduYG6jd532YhDKWXKGuQEGmgjJ',
    thumbnail: 'https://drive.google.com/uc?id=1f8DFtCduYG6jd532YhDKWXKGuQEGmgjJ',
  },
  {
    original: 'https://drive.google.com/uc?id=1iUmjBh9hxm9YamWh7L7YsutMjnIX9jz5',
    thumbnail: 'https://drive.google.com/uc?id=1iUmjBh9hxm9YamWh7L7YsutMjnIX9jz5',
  },
  {
    original: 'https://drive.google.com/uc?id=1BaeVcEb0TpMfe0R733QaaPkANc25KWnL',
    thumbnail: 'https://drive.google.com/uc?id=1BaeVcEb0TpMfe0R733QaaPkANc25KWnL',
  },
  {
    original: 'https://drive.google.com/uc?id=1MdQSHJ78sEiF-T1CMyKHy86GgTcnMV4H',
    thumbnail: 'https://drive.google.com/uc?id=1MdQSHJ78sEiF-T1CMyKHy86GgTcnMV4H',
  },
  {
    original: 'https://drive.google.com/uc?id=1iCFT0v0d0Ywu5Vl8_ih4vhr8qEquoTCO',
    thumbnail: 'https://drive.google.com/uc?id=1iCFT0v0d0Ywu5Vl8_ih4vhr8qEquoTCO',
  },
  {
    original: 'https://drive.google.com/uc?id=1QsedR4HWGXCI7iZpyE7wp5ZOZdWK7yWf',
    thumbnail: 'https://drive.google.com/uc?id=1QsedR4HWGXCI7iZpyE7wp5ZOZdWK7yWf',
  },
];

const FasilitasPage = () => {
  return (
    <Layout pageTitle="Lingkungan Kami">
      <h2 className={relaxfont}>Lingkungan Kami</h2>
      <div className={containerfas}>
        <ImageGallery items={images} autoPlay={true} />
      </div>

    </Layout>
  )
}

export default FasilitasPage