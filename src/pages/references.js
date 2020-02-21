import React, { Component } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopPage from "../components/topPage"

import Cover from "../images/header-skyplus.jpg"
import CardReferences from "../components/cardReferences"

import ref1 from "../images/reference/1.png"

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  .references-title {
    text-align: center;
  }
  .references-middle-wrap {
    width: 100%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

class references extends Component {
  state = {
    middle: [
      {
        image: ref1,
        title: "test",
      },
      {
        image: ref1,
        title: "test",
      },
      {
        image: ref1,
        title: "test",
      },
      {
        image: ref1,
        title: "test",
      },
      {
        image: ref1,
        title: "test",
      },
      {
        image: ref1,
        title: "test",
      },
    ],
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <TopPage imageTop={Cover} titleTop="Nos références" />
        <Wrapper>
          <h1 className="references-title">Nos références</h1>
          <div className="references-middle-wrap">
            {this.state.middle.map((item, index) => {
              return (
                <CardReferences
                  key={index}
                  imageRef={item.image}
                  nameRef={item.title}
                />
              )
            })}
          </div>
        </Wrapper>
      </Layout>
    )
  }
}

export default references
