import React, { Component } from "react"
import styled from "styled-components"

import Icon from "../images/icon/vial-solid.svg"

const Wrapper = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: #fff;
    font-size: 3em;
    text-align: center;
  }
  .top-underline {
    width: 5%;
    border-bottom: 3px solid #05eaff;
  }
  p {
    color: #fff;
    text-align: center;
  }

  .iconeTop {
    width: 10px;
    height: auto;
    color: red;
  }
`

class topPage extends Component {
  render() {
    const style = {
      backgroundImage: `linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url(${
        this.props.imageTop
      })`,
    }
    return (
      <Wrapper style={style}>
        <h1>{this.props.titleTop}</h1>
        <div className="top-underline" />
        <p>Design Graphique | Développement Web</p>
      </Wrapper>
    )
  }
}

export default topPage
