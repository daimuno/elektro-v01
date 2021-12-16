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
  detailtext,
  programkami,
  homeinfo,
  center
} from '../components/page.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className={homeinfo}>
        <h1>Tentang Program Studi Teknik Elektro</h1>
        <p>Fakultas Teknik didirikan pada tanggal 8 Juni 1982 dengan jurusan yang
          dikelola adalah Jurusan Teknik Elektro sesuai Surat Keputusan Yayasan
          Widya Mandala No. 022/Ya/1982. Jurusan ini merupakan pengembangan dari
          Lembaga Pendidikan Elektro (LPE) – setingkat D3 yang didirikan pada tahun 1973.
          Fakultas Teknik selanjutnya berkembang dengan mendirikan Jurusan Teknik Kimia
          pada tahun 1986 dan Jurusan Teknik Industri pada tahun 1997. </p>
          
        <p>Program Studi Teknik Elektro memulai kegiatan pendidikan S-1 dengan Surat
          Keputusan Yayasan Widya Mandala Surabaya nomor 022/I/Yay/Div/1982 tanggal 8 Juni 1982. </p>
        
        <p>Berdasarkan Surat Keputusan Badan Akreditasi Nasional
          Perguruan Tinggi Departemen Pendidikan dan Kebudayaan Republik
          Indonesia No. 3569/SK/BAN-PT/Akred/S/IX/2019. Program Studi Teknik
          Elektro memperoleh status Terakreditasi dengan peringkat “B”. </p>
        <p></p>
      </div>

      <div className={programkami}>
        <div className={homeinfo}>
          <StaticImage
            alt="staf"
            src="../images/icon/program kami.png"
            height={100}
            
          />
          <h1>Program Kami</h1>
        </div>
        
        <div>
          <Container>
            <Row>
              <Col sm={6}>
                <StaticImage
                  alt="staf"
                  src="../images/program/elektro-medic.jpg"
                />
              </Col>

              <Col sm={6}>
                  <h2>Biomedika</h2>
                  Teknik Biomedik ini merupakan program studi yang menggabungkan
                  bidang ilmu keteknikan dan kedokteran, dimana pada program studi
                  ini akan dipelajari bagaimana merancang alat-alat mekanis dan
                  elektronis untuk membantu dunia dunia medis. Secara garis besar,
                  Teknik Biomedis ini mempelajari sistem elektronika kedokteran
                  dan teknologi kesehatan. Prospek kerja jurusan Teknik Biomedis
                  ini semakin cerah melihat perkembangan teknologi kesehatan dari
                  tahun ke tahun yang semakin meningkat.
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                  <h2>Telekomunikasi Multimedia</h2>
                  Program Studi Teknik Elektronika Telekomunikasi merupakan bagian
                  dari Jurusan Elektro. Pada Program Studi Teknik Elektronika
                  Telekomunikasi, mahasiswa akan menguasai desain dan rekayasa
                  perencanaan jaringan telekomunikasi dan elektronika, komunikasi
                  data, radar, perencanaan antena, multimedia broadcasting, mobile
                  communication, rekayasa trafik, dan troubleshooting perangkat
                  telekomunikasi.
              </Col>

              <Col sm={6}>
                  <StaticImage
                    alt="staf"
                    src="../images/program/elektro-main.jpg"
                  />
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <StaticImage
                  alt="staf"
                  src="../images/program/elektro-robot.jpg"
                />
              </Col>

              <Col sm={6}>
                  <h2>Artificial Intelligent dan Sistem Internet of Things (IoT)</h2>
                  Bidang robotika telah menjadi gengsi tersendiri dalam perguruan
                  tinggi. Salah satu robot yang dipelajari adalah robot humanoid.
                  Siswa juga mempelajari sistem kontrol dan maintenance peralatan
                  industri berbasis “electrical control” dan “micro processor”.
                  Meliputi pengetahuan dan keterampilan elektronika umum,
                  mikrokontroller dan mikroprocessor, pneumatic dan PLC, programming
                  berbasis komputer yang erat kaitannya dengan proses produksi di
                  Industri.
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                  <h2>Energi Baru Terbarukan</h2>
                  Teknik Biomedik ini merupakan program studi yang menggabungkan
                  bidang ilmu keteknikan dan kedokteran, dimana pada program studi
                  ini akan dipelajari bagaimana merancang alat-alat mekanis dan
                  elektronis untuk membantu dunia dunia medis. Secara garis besar,
                  Teknik Biomedis ini mempelajari sistem elektronika kedokteran
                  dan teknologi kesehatan. Prospek kerja jurusan Teknik Biomedis
                  ini semakin cerah melihat perkembangan teknologi kesehatan dari
                  tahun ke tahun yang semakin meningkat.
              </Col>

              <Col sm={6}>
                  <StaticImage
                    alt="staf"
                    src="../images/program/energi.jfif"
                  />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      
    </Layout>
  )
}

export default IndexPage