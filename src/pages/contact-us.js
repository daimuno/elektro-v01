import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-grid-system';
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
  detailtext
} from '../components/page.module.css'
const IndexPage = () => {
  return (
    <Layout pageTitle="Contact Us">
      <Container>
        <Row>
          <Col sm={6}>
              <h2>Contact Us</h2>
              <div className={detailtext}>
                <div>Universitas Katolik Widya Mandala Surabaya</div>
                <div>Kampus Kalijudan</div>
                <div>Jl. Kalijudan No. 37, Surabaya 60114, East Java, Indonesia</div>
                <div>Office hour: 08.00 – 16.00 (Senin – Jumat)</div>
                <div>email : hod-electreng@ukwms.ac.id</div>
              </div>
          </Col>

          <Col sm={6}>
              <h2>Form</h2>
              nama depan, belakang
              email
              Comment or Message 
          </Col>

        </Row>
      </Container>
      <p>Google Maps.</p>
    </Layout>
  )
}

export default IndexPage