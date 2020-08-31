import React from "react"

import Menu from '../components/menu'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Menu/>
    <SEO title="Home" />
    <h1>Home Default</h1>
    
  </Layout>
)

export default IndexPage
