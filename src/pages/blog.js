import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopPage from "../components/topPage"

import Cover from "../images/header-skyplus.jpg"

const blog = () => (
  <Layout>
    <SEO title="Le Blog" />
    <TopPage imageTop={Cover} titleTop="Le blog" />
  </Layout>
)

export default blog
