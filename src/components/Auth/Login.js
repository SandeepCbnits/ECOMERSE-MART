import React from "react";
import { NavLink } from "react-router-dom";
import UserInput from "./hooks/User-Input";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const {
    value: email,
    nameIsInValid: invalidEmail,
    onValueInputHandler: onEmailChangeHandler,
    onErrorHandler: emailBlurHandler,
    nameIsValid: validEmail,
    reset: resetHandler,
  } = UserInput((value) => value.includes("@"));
 
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!validEmail) {
      return;
    }
    
  
    navigate("/", {replace: true} )
    resetHandler()
  };
  const formControlClass = invalidEmail ? "inputFiled invalid" : "inputFiled"
  return (
    <div className={style.loginContainer}>
      <h2>Sign-In</h2>
      <form action="" onSubmit={onSubmitHandler}>
        <div className={style.inputFiled}>
          <label htmlFor="email">Email </label> 
          <input
            type="text"
            id="email"
            value={email}
            onChange={onEmailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder="Email Ex. sandeep@cbnits.com"
            required
          />
          {invalidEmail && (
            <p className={style.error}>
              Enter your email or phone  number
            </p>
          )}
        </div>

        <div className={style.actionButton}>
          <button type="submit">Login</button>
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
