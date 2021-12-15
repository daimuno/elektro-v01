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
    <Layout pageTitle="Akademik">
      <h2 className={relaxfont}> </h2>

      <div className={centerbox}>
      <Container>
        <Row>
          <Col sm={3}>
          </Col>
          <Col sm={3}>
              <Link to="./alur"  className={contentLinkText}>
              <StaticImage
                alt="Alur"
                src="../../images/admisi/alur.png"
              />
              <h2>Alur Kuliah</h2>
              </Link>
          </Col>

          <Col sm={3}>
              <Link to="./kalender"  className={contentLinkText}>
              <StaticImage
                alt="Kalender"
                src="../../images/admisi/kalender.png"
              />
              <h2>Kalender Akademik</h2>
              </Link>
          </Col>

          <Col sm={3}>
          </Col>
        </Row>
      </Container>
      </div>
    </Layout>
  )
}

export default IndexPage