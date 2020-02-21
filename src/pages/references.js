import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopPage from "../components/topPage"

import Cover from "../images/header-skyplus.jpg"

const references = () => (
  <Layout>
    <SEO title="Home" />
    <TopPage imageTop={Cover} titleTop="Nos références" />
  </Layout>
)

export default references
