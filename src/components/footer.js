import React, {useEffect, useState} from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import {CSSTransition} from "react-transition-group"
import"./footer.css"

export default function Footer(){
  return(
    <footer classname="Footerbox">
      <div className="Footerbox">
        <div className="Footer">
            <div>
              <Link to="/">
              <div className="f1">Electrical Engineering</div>
              <div className="f2">Widya Mandala Surabaya Catholic University​</div>
              </Link>
              <p className="f3">Jl. Kalijudan No. 37, Surabaya 60114, East Java, Indonesia</p>
              <p> </p>
              <div className="f3">Telp: +6231 389 3933</div>
              <div className="f3">Fax: +6231 389 1267</div>
              <p> </p>
            </div>

            <div>
              <div className="f2">Follow Us!</div>
              <div className="social">
                <Link to="https://goo.gl/maps/dTdo2S5earzVL7bb8" className="navLinkText">
                  <StaticImage
                    alt="maps"
                    src="../images/icon/maps.png"/>
                </Link>
                <Link to="https://www.youtube.com/channel/UC-p7aLRG_KrFjgKqywH0XOw" className="navLinkText">
                  <StaticImage
                    alt="youtube"
                    src="../images/icon/youtube.png"/>
                </Link>
                <Link to="https://api.whatsapp.com/send?phone=628155023469&text=Saya%20tertarik%20dengan%20JTE." className="navLinkText">
                  <StaticImage
                    alt="whatsapp"
                    src="../images/icon/whatsapp.png"/>
                </Link>
                <Link to="https://www.instagram.com/teknikelektro_ukwms/" className="navLinkText">
                  <StaticImage
                    alt="instagram"
                    src="../images/icon/instagram.png"/>
                </Link>
              </div>
            </div>

        </div>
        <div className="copyright">
          Copyright © 2021 Teknik Elektro UKWMS | Powered by Teknik Elektro UKWMS
        </div>
      </div>
    </footer>
  )
}