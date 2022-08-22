import React from "react";
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
    value: number,
    nameIsInValid: invalidNumber,
    onValueInputHandler: onNumberChangeHandler,
    onErrorHandler: numberBlurHandler,
    nameIsValid: validNumber,
    reset: resetNumberHandler,
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

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validEmail && !validName && !validNumber && !validPassword) {
      return;
    }
    resetNameHandler();
    resetEmailHandler();
    resetNumberHandler();
    resetPasswordrHandler();
    navigate("/", { replace: true });
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
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="number"
            id="mobile"
            placeholder="Mobile Number Ex. 084004209..."
            value={number}
            onChange={onNumberChangeHandler}
            onBlur={numberBlurHandler}
            required
          />
          {invalidNumber && (
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
