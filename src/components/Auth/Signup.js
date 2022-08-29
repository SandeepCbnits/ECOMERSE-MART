import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserInput from "./hooks/User-Input";
import style from "./Signup.module.css";
const Signup = ({setProfile}) => {
  const navigate = useNavigate();
  
  const {
    value: fname,
    nameIsInValid: invalidFName,
    onValueInputHandler: onFNameChangeHandler,
    onErrorHandler: fnameBlurHandler,
    nameIsValid: validFName,
    reset: resetFNameHandler,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: lname,
    nameIsInValid: invalidLNumber,
    onValueInputHandler: onLNumberChangeHandler,
    onErrorHandler: lnumberBlurHandler,
    nameIsValid: validLNumber,
    reset: resetLNumberHandler,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: email,
    nameIsInValid: invalidEmail,
    onValueInputHandler: onEmailChangeHandler,
    onErrorHandler: emailBlurHandler,
    nameIsValid: validEmail,
    reset: resetEmailHandler,
  } = UserInput((value) => value.includes("@"));

  const {
    value: password,
    nameIsInValid: invalidPassword,
    onValueInputHandler: onPasswordChangeHandler,
    onErrorHandler: passwordBlurHandler,
    nameIsValid: validPassword,
    reset: resetPasswordrHandler,
  } = UserInput((value) => value.trim() !== "");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validEmail && !validFName && !validLNumber && !validPassword) {
      return;
    }

    let signup = await fetch("http://localhost:9999/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,        
        lname: lname,
        name: fname,
        password: password,
      }),
    });
    console.log(email, lname);
    
    let responseData = await signup.json();
    console.log(responseData);

    resetFNameHandler();
    resetEmailHandler();
    resetLNumberHandler();
    resetPasswordrHandler();
    navigate("/login", { replace: true });
  };

  return (
    <div className={style.signupContainer}>
      <h3>Create Account</h3>
      <form action="" onSubmit={submitHandler}>
        <div className={style.inputFiled}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="First and Last Name EX. Sandeep Yadav"
            value={fname}
            onChange={onFNameChangeHandler}
            onBlur={fnameBlurHandler}
            required
          />
          {invalidFName && <p className={style.error}>! Enter your name</p>}
        </div>
        <div className={style.inputFiled}>
          <label htmlFor="lname">Mobile Number</label>
          <input
            type="text"
            id="lname"
            placeholder="Mobile Number Ex. 084004209..."
            value={lname}
            onChange={onLNumberChangeHandler}
            onBlur={lnumberBlurHandler}
            required
           
          />

          {invalidLNumber && (
            <p className={style.error}>! Enter your mobile number</p>
          )}
        </div>
        <div className={style.inputFiled}>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            placeholder="Email Ex. sandeep@cbnits.com"
            value={email}
            onChange={onEmailChangeHandler}
            onBlur={emailBlurHandler}
            required
          />
          {invalidEmail && <p className={style.error}>! Enter your email </p>}
        </div>
        <div className={style.inputFiled}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="At list 6 charector Ex 123456"
            value={password}
            onChange={onPasswordChangeHandler}
            onBlur={passwordBlurHandler}
            minLength={7}
            maxLength={14}
            required
          />
          {invalidPassword && (
            <p className={style.error}>! Enter your password</p>
          )}
        </div>
        <div className={style.actionButton}>
          <button type="submit">Continue</button>
        </div>
      </form>

      <footer>
        <p>
          Already have an account ?<NavLink to="/login">Sigin In</NavLink>{" "}
          <br />
          <NavLink to="/">Back To Home</NavLink>
        </p>
      </footer>
    </div>
  );
};

export default Signup;
