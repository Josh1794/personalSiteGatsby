import React from "react"

import Layout from "../components/layout"
import Splash from "../components/splash"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Splash />
    <About />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
