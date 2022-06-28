import PropTypes from 'prop-types'
import React from 'react'
import blogo from '../images/transp.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={blogo} alt="B" className="small-logo" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Bhumik Prajapati</h1>
        <p>
          A passionate Full Stack Software Developer 🚀 <br />
          having an experience of building Web applications with JavaScript /
          Reactjs / Nodejs <br /> and some other cool libraries and frameworks
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
