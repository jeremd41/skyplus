import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 30%;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  padding: 10px;

  .reference-image {
    width: 90%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  .reference-title {
    text-align: center;
    margin: 50px 0;
  }
`

class cardReferences extends Component {
  render() {
    return (
      <Wrapper>
        <img
          className="reference-image"
          src={this.props.imageRef}
          alt="reference"
        />
        <h4 className="reference-title">{this.props.nameRef}</h4>
      </Wrapper>
    )
  }
}

export default cardReferences
