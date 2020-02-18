import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "../images/gatsby-icon.png"

const Wrapper = styled.header`
  .logo {
    display: flex;
    text-align: center;
    align-items: center;
  }

  .header-logo {
    width: 60px;
    height: auto;
    h5 {
      height: 60px;
      line-height: 60px;
    }
  }

  .logo-title {
    color: #05eaff;
    font-size: 1.25rem;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper className="header">
    <Link to="/" className="logo">
      <img src={Logo} alt="Skyplus logo" className="header-logo" />
      <h5 className="logo-title">Skyplus</h5>
    </Link>
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" for="menu-btn">
      <span className="navicon" />
    </label>
    <ul className="menu">
      <li>
        <Link to="/blog/">Le blog</Link>
      </li>
      <li>
        <Link to="/agence/">L'agence</Link>
      </li>
      <li>
        <Link to="/references/">Références</Link>
      </li>
      <li>
        <Link to="/services/">Nos services</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
