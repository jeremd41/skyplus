import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopPage from "../components/topPage"

import Cover from "../images/header-skyplus.jpg"

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  .index-title {
    text-align: center;
  }
  .index-subtitle {
    text-align: center;
  }
  p {
    text-align: center;
  }
`

const agence = () => (
  <Layout>
    <SEO title="L'agence" />
    <TopPage imageTop={Cover} titleTop="L'agence" />
    <Wrapper>
      <h1 className="index-title">Notre société</h1>
      <p>
        Notre équipe met toute son expertise au service de ses clients, pour
        faciliter la mise en œuvre et la pérennité de leurs projets de création
        de sites internet et d’applicatifs web.
      </p>
      <h1 className="index-title">La composition de l'équipe SkyPlus</h1>
    </Wrapper>
  </Layout>
)

export default agence
