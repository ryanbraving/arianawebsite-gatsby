import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {PageHeader, Banner} from '../utils'
import img from '../images/bcg/contactBcg.jpeg'


const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <Banner title='contact us' subtitle="let's get in touch">
      
      </Banner>
    </PageHeader>
  </Layout>
)


export default ContactPage