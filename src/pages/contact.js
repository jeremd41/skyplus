import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopPage from "../components/topPage"

import Cover from "../images/header-skyplus.jpg"

const contact = () => (
  <Layout>
    <SEO title="Contact" />
    <TopPage imageTop={Cover} titleTop="Contact" />
  </Layout>
)

export default contact
