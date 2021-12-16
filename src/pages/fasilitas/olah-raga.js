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
    original: 'https://drive.google.com/uc?id=1ziOCPLdqrcraxqV1TqBeHyPVVCK5eJpw',
    thumbnail: 'https://drive.google.com/uc?id=1ziOCPLdqrcraxqV1TqBeHyPVVCK5eJpw',
    description: 'Lapangan Basket',
  },
  {
    original: 'https://drive.google.com/uc?id=1_GNbVG4kAMNn0d8lrgDABUqmf91UQeq3',
    thumbnail: 'https://drive.google.com/uc?id=1_GNbVG4kAMNn0d8lrgDABUqmf91UQeq3',
    description: 'Lapangan Voli',
  },
  {
    original: 'https://drive.google.com/uc?id=1-KJ1tAqrUaNLkPdUT1SAUIvg75AnDn0_',
    thumbnail: 'https://drive.google.com/uc?id=1-KJ1tAqrUaNLkPdUT1SAUIvg75AnDn0_',
    description: 'Lahan Parkir Yang Luas',
  },
];

const FasilitasPage = () => {
  return (
    <Layout pageTitle="Fasilitas Olah Raga">
      <h2 className={relaxfont}>Fasilitas Olah Raga</h2>
      <div className={containerfas}>
        <ImageGallery items={images} autoPlay={true} />
      </div>

    </Layout>
  )
}

export default FasilitasPage