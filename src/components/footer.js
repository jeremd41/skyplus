import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.footer`
  background: #05eaff;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  .footer-title {
    color: #fff;
    text-align: center;
  }
`

class footer extends Component {
  render() {
    return (
      <Wrapper>
        <p className="footer-title">2019 - SkyPlus</p>
      </Wrapper>
    )
  }
}

export default footer
