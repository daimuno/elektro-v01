import * as React from 'react'
import Layout from '../../components/layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const IndexPage = () => {
  return (
    <Layout pageTitle="Penerimaan Mahasiswa Baru Program Sarjana (S-1)">
        <Tabs>
          <TabList>
            <Tab>Syarat Pendaftaran</Tab>
            <Tab>Biaya Kuliah</Tab>
            <Tab>Alur Pendaftaran</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
    </Layout>
  )
}

export default IndexPage