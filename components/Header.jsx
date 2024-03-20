import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header
