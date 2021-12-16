import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
  container,
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

const FasilitasPage = () => {
  return (
    <Layout pageTitle="Fasilitas">
        <Tabs>
          <TabList>
            <Tab>Laboratorium</Tab>
            <Tab>Lingkungan Kami</Tab>
            <Tab>Lapangan Olah Raga</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
            <StaticImage
                alt="staf"
                src="../../images/fasilitas/lab.jpg"
              />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
            <StaticImage
                alt="staf"
                src="../../images/fasilitas//env/env1.jpg"
              />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
            <StaticImage
                alt="staf"
                src="../../images/fasilitas/basket.jpg"
            />
          </TabPanel>
        </Tabs>
    </Layout>
  )
}

export default FasilitasPage