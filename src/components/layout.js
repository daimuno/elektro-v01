import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-grid-system';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navstyle,
  allpage,
  footer,
  f2,
  f3,
  f4,
  footerleft,
  copyright
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={allpage}>
    <div className={navstyle}>
      <title>{pageTitle}</title>
      <nav>
      <StaticImage
        alt="UKWMS"
        src="../images/header v3.png"
      />
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/fasilitas" className={navLinkText}>
              Fasilitas
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/akademik" className={navLinkText}>
              Akademik
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/admisi" className={navLinkText}>
              Admisi
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/dosen-dan-staff" className={navLinkText}>
              Dosen dan Staff
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/informasi" className={navLinkText}>
              Informasi
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/publikasi" className={navLinkText}>
              Publikasi
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact-us" className={navLinkText}>
              Contact Us
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/member" className={navLinkText}>
              Member
            </Link>
          </li>
        </ul>
      </nav></div>
      <div className={container}>
      <main>
        {children}
      </main>
    </div>

      <div className={footer}>
      <Container>
        <Row>
          <Col sm={7}>
            <div className={footerleft}>
              <Link to="/">
              <div className={f2}>Electrical Engineering</div>
              <div className={f3}>Widya Mandala Surabaya Catholic University​</div>
              </Link>
              <p className={f4}>Jl. Kalijudan No. 37, Surabaya 60114, East Java, Indonesia</p>
              <p> </p>
              <div className={f4}>Telp: +6231 389 3933</div>
              <div className={f4}>Fax: +6231 389 1267</div>
              <p> </p>
            </div>
          </Col>

          <Col sm={5}>
              <Link to="./beasiswa">
              social media icon
              </Link>
          </Col>
        </Row>
      </Container>
      </div>
      <div className={copyright}>
            Copyright © 2021 Teknik Elektro UKWMS | Powered by Teknik Elektro UKWMS
          </div>
    </div>
  )
}

export default Layout