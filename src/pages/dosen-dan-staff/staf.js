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
  centerbox
} from '../../components/page.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Admisi">
      <h2 className={relaxfont}>Staf Program Studi Teknik Elektro</h2>

      <div className={centerbox}>
      <Container>
        <Row>
          <Col sm={2}></Col>

          <Col sm={3}>
              <StaticImage
                src="../../images/staf/bambang.png"
              />
          </Col>

          <Col sm={5}>
            <h2>Heribertus Bambang</h2>
            Ketua Tata Usaha
          </Col>

          <Col sm={2}></Col>
        </Row>


        <Row>
          <Col sm={2}></Col>

          <Col sm={3}>
              <StaticImage
                src="../../images/staf/desi.png"
              />
          </Col>

          <Col sm={5}>
            <h2>Veronica Desi Adriani</h2>
            Staf Tata Usaha
          </Col>

          <Col sm={2}></Col>
        </Row>

        <Row>
          <Col sm={2}></Col>

          <Col sm={3}>
              <StaticImage
                src="../../images/staf/flo.png"
              />
          </Col>

          <Col sm={5}>
            <h2>Florentina Titi Setiawati</h2>
            Staf Tata Usaha
          </Col>

          <Col sm={2}></Col>
        </Row>

        <Row>
          <Col sm={2}></Col>

          <Col sm={3}>
              <StaticImage
                src="../../images/staf/endang.png"
              />
          </Col>

          <Col sm={5}>
            <h2>Endang Dosowati</h2>
            Staf Tata Usaha
          </Col>

          <Col sm={2}></Col>
        </Row>
      </Container>
      <p> </p>
      </div>
    </Layout>
  )
}

export default IndexPage