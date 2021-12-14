import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-grid-system';
import Layout from '../../components/layout'
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
} from '../../components/page.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Admisi">
      <h2 className={relaxfont}>Join Electrical Engineering WMSCU</h2>
      <div className={handwrite}>We'd love for you to join us...</div>

      <Container>
        <Row>
          <Col sm={4}>
              <Link to="./pendaftaran">
              <StaticImage
                alt="Daftar"
                src="../../images/admisi/daftar.jpg"
              />
              <h2 className={contentLinkText}>Pendaftaran</h2>
              </Link>
          </Col>

          <Col sm={4}>
              <Link to="./beasiswa">
              <StaticImage
                alt="Beasiswa"
                src="../../images/admisi/beasiswa.jpg"
              />
              <h2 className={contentLinkText}>Beasiswa</h2>
              </Link>
          </Col>

          <Col sm={4}>
              <Link to="../contact-us">
              <StaticImage
                alt="Beasiswa"
                src="../../images/admisi/kontak.png"
              />
              <h2 className={contentLinkText}>Contact Us</h2>
              </Link>
          </Col>
        </Row>
      </Container>

    </Layout>
  )
}

export default IndexPage