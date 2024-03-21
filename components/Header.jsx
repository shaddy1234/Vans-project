import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <NavLink to="/host" className={({isActive}) => isActive ? "active-styles" : null}>
            Host
          </NavLink>

          <NavLink to="/about" className={({isActive}) => isActive ? "active-styles" : null}>
            About
          </NavLink>

          <NavLink to="/vans" className={({isActive}) => isActive ? "active-styles" : null}>
            Vans
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Header;
