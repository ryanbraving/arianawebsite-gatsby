import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {PageHeader, Banner} from '../utils'
import img from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <Banner title='about' subtitle='a little about us'>
      
      </Banner>
    </PageHeader>
  </Layout>
)


export default AboutPage