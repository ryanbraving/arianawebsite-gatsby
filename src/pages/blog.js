import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {PageHeader, Banner} from '../utils'
import img from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <Banner title='menu' subtitle={`let's dig in `}>
      
      </Banner>
    </PageHeader>
  </Layout>
)


export default MenuPage