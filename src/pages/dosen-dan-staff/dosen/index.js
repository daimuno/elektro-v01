import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-grid-system';
import Layout from '../../../components/layout'
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
  centerbox
} from '../../../components/page.module.css'

function spacer(){
  return (
    <Row>
      <Col sm={12}><p>asd</p></Col>
    </Row>
  )
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Admisi">
      <h2 className={relaxfont}>Dosen Program Studi Teknik Elektro</h2>

      <div className={centerbox}>
      <Container>
        <Row>
          <Col sm={1}></Col>

          <Col sm={4}>
            <Link to="./alur"  className={contentLinkText}>
              <StaticImage
                alt="Alur"
                src="../../../images/staf/peter1.jpg"
              />
              <h2>Ir. Albert Gunadhi ST., MT., IPM.</h2>
              Dosen, Ketua Jurusan
            </Link>
          </Col>
          <Col sm={2}></Col>
          <Col sm={4}>
            <Link to="./alur"  className={contentLinkText}>
              <StaticImage
                alt="Alur"
                src="../../../images/staf/peter1.jpg"
              />
              <h2>Ir. Albert Gunadhi ST., MT., IPM.</h2>
              Dosen, Ketua Jurusan
            </Link>
          </Col>

          <Col sm={1}></Col>
        </Row>

        <Row>
          <Col sm={12}><p> </p></Col>
        </Row>

        <Row>
          <Col sm={1}></Col>

          <Col sm={5}>
              <StaticImage
                src="../../../images/staf/bambang.png"
              />
          </Col>

          <Col sm={5}>
            <h2>Heribertus Bambang</h2>
            Ketua Tata Usaha
          </Col>

          <Col sm={1}></Col>
        </Row>

        <Row>
          <Col sm={12}><p> </p></Col>
        </Row>
        
      </Container>
      <p> </p>
      </div>
    </Layout>
  )
}

export default IndexPage