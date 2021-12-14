import * as React from 'react'
import Layout from '../components/layout'
import {
  container,
  heading,
  homeinfo,
  relaxfont,
  handwrite,
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
      
    </Layout>
  )
}

export default IndexPage