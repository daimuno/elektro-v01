import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container, Row, Col } from 'react-grid-system';
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
      <h2 className={relaxfont}>Fasilitas Kami</h2>
      <Container>
        <Row>
          <Col sm={4}>
              <Link to="./lab">
              <StaticImage
                alt="Daftar"
                src="../../images/fasilitas/lab.jpg"
              />
              <h2 className={contentLinkText}>Laboratorium</h2>
              </Link>
          </Col>

          <Col sm={4}>
              <Link to="./lingkungan">
              <StaticImage
                alt="Beasiswa"
                src="../../images/fasilitas/env/env1.jpg"
              />
              <h2 className={contentLinkText}>Lingkungan Kami</h2>
              </Link>
          </Col>

          <Col sm={4}>
              <Link to="../olah-raga">
              <StaticImage
                alt="Beasiswa"
                src="../../images/fasilitas/basket.jpg"
              />
              <h2 className={contentLinkText}>Lapangan Olah Raga</h2>
              </Link>
          </Col>
        </Row>
      </Container>


    </Layout>
  )
}

export default FasilitasPage