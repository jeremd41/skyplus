import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 30%;
  margin: 25px auto;
  .card-carre {
    width: 70px;
    height: 70px;
    border: 3px solid #0feaff;
    color: #0feaff;
    transform: rotate(45deg);
    margin: 16px auto 30px auto;
    transition: 0.3s linear;
    :hover {
      background: #0feaff;
      color: #fff;
    }
  }
  i {
    width: 90%;
    line-height: 70px;
    transform: rotate(-45deg);
    font-size: 26px;
    text-align: center;
    margin: auto;
  }
  .card-title {
    text-align: center;
  }
  .card-content {
    text-align: center;
  }
`

class cardIndex extends Component {
  render() {
    return (
      <Wrapper>
        <div className="card-carre">
          <i className={this.props.carre} />
        </div>
        <h4 className="card-title">{this.props.title}</h4>
        <p className="card-content">{this.props.content}</p>
      </Wrapper>
    )
  }
}

export default cardIndex
