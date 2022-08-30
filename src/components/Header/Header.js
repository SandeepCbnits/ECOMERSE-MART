import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-Slice";

const Header = ({ cartItems, products }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const isLogedIn = useSelector((state) => state.ui.isLogedIn);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  // const onChangeHadler =  (e) => {
  //   let key = e.target.value;
  //   setSearchValue(e.target.value);
  //   if (key !== "") {
  //     setSearchValue(products);
  //   }
  // };
 
  const onLoginHandler =() => {   
    dispatch(uiActions.isLogoutHandler());
  };
  useEffect(() => {
    onLoginHandler()
  }, []);

  return (
    <div>
      <div className={style.header}>
        <div className={style.header_cart}>
          <span className={style.logo}>Shoping Mart</span>
          <input type="text" name="search" />
          <span className={style.search_icon}>
            <i class="fa fa-search"></i>
          </span>
        </div>
        {/* Condition for login logoout and profile setup */}
        <div className={style.header__signup}>
          <div className={style.header___login}>
            {!isLogedIn && <NavLink to="/">Login</NavLink>}
            {isLogedIn && <NavLink to="/profile">Profile </NavLink>}
            {isLogedIn && (
              <NavLink to="/login" onClick={onLoginHandler}>
                Logout
              </NavLink>
            )}
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
              {/* <NavLink to="/" onClick={isOpenHandler}>
                <i class="fa fa-bars"></i>
              </NavLink> */}
            </aside>
            {isOpen && (
              <SideBar openClass="open" onCloseHandler={isOpenHandler} />
            )}
          </div>
          <NavLink to="/home">Home</NavLink>
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
