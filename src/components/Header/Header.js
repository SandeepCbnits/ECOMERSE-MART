import React, { useState } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ cartItems }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
let quentity =localStorage.getItem("QUENTITY")
console.log(quentity.length)
  const isLogedIn = localStorage.getItem("TOKEN") ? true : false;

  const onLogoutHandler = () => {
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("TOKEN");
    navigate("/login", { replace: true });
  };

  const showNavBar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="header">
        <div className="header_cart">
          <span className="logo">Shoping Mart</span>
          <input type="text" name="search" placeholder="Search Products"/>
          {/* <span className="search_icon">
            <i class="fa fa-search"></i>
          </span> */}
        </div>
        <div className="header__signup">
          <div className="header___login">
            {!isLogedIn && <NavLink to="/">Login</NavLink>}
            {isLogedIn && (
              <NavLink to="/profile" title="PROFILE">
                {localStorage.getItem("USERNAME")}
                <i class="fa fa-user"></i>{" "}
              </NavLink>
            )}
            {isLogedIn && (
              <NavLink to="/login" onClick={onLogoutHandler}>
                Logout
              </NavLink>
            )}
          </div>
          <NavLink to="/cart" className="header__cart">
              {quentity.length === 0 ? "" : quentity.length}
            <i class="fa fa-shopping-cart">0
            </i>
          </NavLink>
        </div>
      </div>
      {/*------------------------ NavBar--------------------- */}
      <div>
        <div className="second_header">
          <nav className="main_nav">
            <div
              // showNavBar={showNavBar}
              className={isOpen ? "menu_link mobile_menu_link" : "menu_link"}
            >
              <div className="close">
                <button className="close_button" onClick={closeNavBar}>
                  close
                </button>
              </div>
              <NavLink onClick={closeNavBar} to="/home">
                Home
              </NavLink>
              <NavLink onClick={closeNavBar} to="/about">
                About
              </NavLink>
              <NavLink onClick={closeNavBar} to="/category">
                Category
              </NavLink>
              <NavLink onClick={closeNavBar} to="/wishlist">
                WishList
              </NavLink>
              <NavLink onClick={closeNavBar} to="/contact">
                Contact Us
              </NavLink>
            </div>
          </nav>
          <div >
          <button  className="hamburger_menu" onClick={showNavBar}>
            {" "}
            &#9776;
          </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
