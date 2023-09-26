import React from 'react'
import {Link} from "react-router-dom"
const Header = (props) => {
  return (
    <header>
      <div className="page_width">
        <div className="nav_header">
        <div className="logo"><img src={props.logo} alt="" /></div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Sevices</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><a hrf="tel:+971586747123">{props.icons} <span>+971 58 67 47 123</span></a></li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
