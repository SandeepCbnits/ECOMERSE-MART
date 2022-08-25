import React, { useState } from "react";
import style from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Header = ({ cartItems, isLogedIn,products }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const onChangeHadler = async (e) => {
    let key = e.target.value;
    setSearchValue(e.target.value);
    if (key !== "") {
      let result = await fetch(
        `http://localhost:9090/products/getByProductId?pid=${key}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: products.id,
        }
      );
      let response = await result.json();
      console.log(response);
      setSearchValue(response)
    } else {
      setSearchValue(products);
    }
  };
  return (
    <div>
      <div className={style.header}>
        <div className={style.header_cart}>
          <span className={style.logo}>Shoping Mart</span>
          <input type="number"  onChange={onChangeHadler} />
          <span className={style.search_icon}>
            <i class="fa fa-search"></i>
          </span>
        </div>
        {/* Condition for login logoout and profile setup */}
        <div className={style.header__signup}>
          <div className={style.header___login}>
            <NavLink to="/login">{isLogedIn ? "Logout" : "Login"} </NavLink>
            <NavLink to="/profile">{isLogedIn ? "Profile" : ""} </NavLink>
          </div>

          <NavLink to="/cart" className={style.header__cart}>
            <i class="fa fa-shopping-cart">
              {cartItems.length === 0 ? "" : cartItems.length}
            </i>
          </NavLink>
        </div>
      </div>
      <header className={style.second_header}>
        <div className={style.header__nav}>
          <div className={style.side_menu}>
            <aside className={isOpen ? "to-right" : ""}>
              <NavLink to="/" onClick={isOpenHandler}>
                <i class="fa fa-bars"></i>
              </NavLink>
            </aside>
            {isOpen && (
              <SideBar openClass="open" onCloseHandler={isOpenHandler} />
            )}
          </div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/category">Category</NavLink>
          <NavLink to="/wishlist">WishList</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
