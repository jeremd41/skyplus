import React, { Component } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopPage from "../components/topPage"
import CardIndex from "../components/cardIndex"

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
  .index-content {
    text-align: center;
  }
  .index-middle {
    margin-top: 100px;
  }
  .underline {
    width: 15%;
    margin: 0 auto;
    border-bottom: 3px solid #05eaff;
  }
  .index-middle-wrap {
    width: 100%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

class IndexPage extends Component {
  state = {
    middle: [
      {
        carre: "fab fa-css3",
        title: "test",
        content: "test",
      },
      {
        carre: "fas fa-pencil-ruler",
        title: "test",
        content: "test",
      },
      {
        carre: "fas fa-pencil-ruler",
        title: "test",
        content: "test",
      },
      {
        carre: "fas fa-pencil-ruler",
        title: "test",
        content: "test",
      },
      {
        carre: "fas fa-pencil-ruler",
        title: "test",
        content: "test",
      },
      {
        carre: "fas fa-pencil-ruler",
        title: "test",
        content: "test",
      },
    ],
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <TopPage imageTop={Cover} titleTop="AGENCE WEB SKYPLUS" />
        <Wrapper>
          <h1 className="index-title">SkyPlus est née en 2019</h1>
          <div className="underline" />
          <p className="index-content">
            Agence web, nous accompagnons nos clients dans la création de site
            internet: étude, UX, conception, design, développement. Notre agence
            web est capable de répondre à tous vos besoins et d'élaborer une
            véritable stratégie digitale.
          </p>
          <h3 className="index-subtitle">Notre engagement</h3>
          <p className="index-content">
            Vous apportez les conseils et les solutions techniques pour tirer
            pleinement partie des atouts du web.
          </p>
          <h3 className="index-subtitle">Notre objectif</h3>
          <p className="index-content">
            Nous vous garantissons la réussite de votre projet! & nous vous
            garantissons votre réussite !
          </p>
          <div className="index-middle">
            <h1 className="index-title">Domaines d'expertises</h1>
            <div className="underline" />
            <div className="index-middle-wrap">
              {this.state.middle.map((item, index) => {
                return (
                  <CardIndex
                    key={index}
                    carre={item.carre}
                    title={item.title}
                    content={item.content}
                  />
                )
              })}
            </div>
          </div>
        </Wrapper>
      </Layout>
    )
  }
}

export default IndexPage
