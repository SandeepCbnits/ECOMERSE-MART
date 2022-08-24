import React from "react";
import { NavLink } from "react-router-dom";
import UserInput from "./hooks/User-Input";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
const Login = ({isLogoutHandler}) => {
  const navigate = useNavigate()
  const {
    value: email,
    nameIsInValid: invalidEmail,
    onValueInputHandler: onEmailChangeHandler,
    onErrorHandler: emailBlurHandler,
    nameIsValid: validEmail,
    reset: resetHandler,
  } = UserInput((value) => value.includes("@"));
 
  const {
    value: phoneNumber,
    nameIsInValid: invalidphoneNumber,
    onValueInputHandler: onPhoneChangeHandler,
    onErrorHandler: phoneBlurHandler,
    nameIsValid: validPhoneNumber,
    reset: resetPhoneNumberHandler,
  } = UserInput((value) => value.trim() === "");
 
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    if (!validEmail && !validPhoneNumber) {
      return;
    }
    let fetchData = await fetch("http://localhost:3000/user/login", {
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        phoneNumber:phoneNumber
        
      })
    })
  let responseData= await fetchData.json();
  console.log(responseData)
  resetHandler()
 
  resetPhoneNumberHandler()
  
  navigate("/", {replace: true} )
 
  };
  //const formControlClass = invalidEmail ? "inputFiled invalid" : "inputFiled"
  return (
    <div className={style.loginContainer}>
      <h2>Sign-In</h2>
      <form action="" onSubmit={onSubmitHandler}>
        <div className={style.inputFiled}>
          <label htmlFor="email">Email </label> 
          <input
            type="email"
            id="email"
            value={email}            
            onChange={onEmailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder="Email Ex. sandeep@cbnits.com"
            required
          />
          {invalidEmail && (
            <p className={style.error}>
              Enter your email address
            </p>
          )}
        </div>
        <div className={style.inputFiled}>
          <label htmlFor="phoneNumber">Password </label> 
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={onPhoneChangeHandler}
            onBlur={phoneBlurHandler}
            placeholder="phone Ex. 08400409... "           
            required
          />
          {invalidphoneNumber && (
            <p className={style.error}>
              Enter your Password 
            </p>
          )}
        </div>

        <div className={style.actionButton}>
          <button type="submit"  onClick={()=>isLogoutHandler()}>Login</button>
        </div>
      </form>
      <footer>
        <p>
          New Customer ?<NavLink to="/signup"> Start Hear </NavLink>
        </p>
        <NavLink to="/">Back To Home</NavLink>
      </footer>
    </div>
  );
};

export default Login;
