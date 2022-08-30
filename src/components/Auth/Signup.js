import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserInput from "./hooks/User-Input";
import style from "./Signup.module.css";
const Signup = () => {
  const navigate = useNavigate();

  
  const {
    value: name,
    nameIsInValid: invalidName,
    onValueInputHandler: onNameChangeHandler,
    onErrorHandler: nameBlurHandler,
    nameIsValid: validName,
    reset: resetNameHandler,
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
    if (!validEmail && !validName && !validPassword) {
      return;
    }
    let signup = await fetch("http://localhost:9999/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    });
    console.log(email);
  
    let responseData = await signup.json();
    console.log(responseData);

    resetNameHandler();
    resetEmailHandler();
    
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
            value={name}
            onChange={onNameChangeHandler}
            onBlur={nameBlurHandler}
            required
          />
          {invalidName && <p className={style.error}>! Enter your name</p>}
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
