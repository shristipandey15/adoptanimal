import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";



function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>


      <nav className="navbar">
        <div className="nav-container">
         
            <NavLink
            to= "/PETCARE"
            className="logo"
             onClick={handleClick}
            >PETCARE</NavLink>
            
            

           <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/dogs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Dogs
              </NavLink>
            </li>
            <li className="nav-item">
              
              <NavLink
                exact
                to="/cats"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Cats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/breeds"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Breeds
              </NavLink>
           
            </li>
            <li className="nav-item"> 
               <NavLink
                exact
                to="/adopted"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Adopted
              </NavLink>
            </li>
            <li className="nav-item"> 
               <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item"> 
               <NavLink
                exact
                to="/signup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Signup
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
