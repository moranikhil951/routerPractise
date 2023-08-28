// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <div className="img-hd-flex">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-logo"
        />
        <h1 className="header-heading-logo">Wave</h1>
      </div>
      <ul className="nav-menu">
        <li className="listed-items">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="listed-items">
          <Link className="nav-link" to="/about">
            <h1> About</h1>
          </Link>
        </li>
        <li className="listed-items">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
