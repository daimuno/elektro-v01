import * as React from 'react'
import Layout from '../../components/layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const FasilitasPage = () => {
  return (
    <Layout pageTitle="Fasilitas">
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default FasilitasPage