import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopPage from "../components/topPage"

import Cover from "../images/header-skyplus.jpg"

const services = () => (
  <Layout>
    <SEO title="Services" />
    <TopPage imageTop={Cover} titleTop="Nos services" />
  </Layout>
)

export default services
