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
      <h2 className={relaxfont}>Learn More About Our Team</h2>

      <div className={centerbox}>
      <Container>
        <Row>
          <Col sm={3}>
          </Col>
          <Col sm={3}>
              <Link to="./dosen"  className={contentLinkText}>
              <StaticImage
                alt="staf"
                src="../../images/admisi/male.png"
              />
              <h2>Dosen</h2>
              </Link>
          </Col>

          <Col sm={3}>
              <Link to="./staf"  className={contentLinkText}>
              <StaticImage
                alt="staf"
                src="../../images/admisi/female.png"
              />
              <h2>Staf</h2>
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