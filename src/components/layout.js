import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-grid-system';
import Header from './header';
import Footer from './footer';
import {
  container,
  navstyle,
  allpage,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={allpage}>
      <div className={navstyle}>
        <title>{pageTitle}</title>
        <nav><Header /></nav>
      </div>

      <div className={container}>
        <main>
          {children}
        </main>
      </div>
      <p> </p>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout