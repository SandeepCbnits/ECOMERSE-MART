import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserInput from "./hooks/User-Input";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-Slice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: email,
    nameIsInValid: invalidEmail,
    onValueInputHandler: onEmailChangeHandler,
    onErrorHandler: emailBlurHandler,
    nameIsValid: validEmail,
    reset: resetHandler,
  } = UserInput((value) => value.includes("@") && value.includes(".com"));

  const {
    value: password,
    nameIsInValid: invalidPassword,
    onValueInputHandler: onPasswordChangeHandler,
    onErrorHandler: passwordBlurHandler,
    nameIsValid: validPassword,
    reset: resetPasswordrHandler,
  } = UserInput((value) => value.length >= 6);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validEmail && !validPassword) {
      return;
    }

    // let login = await fetch("http://localhost:9090/users/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //      email,
    //      password,

    //   }),
    // });
    //
    // console.log(email, password);
    // let responseData = await login.json();
    // console.log(responseData, "Respons Data is ");

    resetHandler();
    resetPasswordrHandler();
    navigate("/home", { replace: true });
  };
  const logoutHandler = () => {
    if (!validEmail && !validPassword) {
      return;
    }
    dispatch(uiActions.isLogoutHandler());
  };

  useEffect(() => {
    if (validEmail && validPassword) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [validEmail, validPassword]);
  //const formControlClass = invalidEmail ? "inputFiled invalid" : "inputFiled"
  return (
    <div className={style.loginContainer}>
      <h3 className={style.title}>Sign-In</h3>
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
          />
          {invalidEmail && (
            <p className={style.error}>Enter your email address</p>
          )}
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
          />
          {invalidPassword && (
            <p className={style.error}>Enter your password</p>
          )}
        </div>

        <div className={style.actionButton}>
          <button type="submit" onClick={logoutHandler} disabled={!formIsValid}>
            Login
          </button>
        </div>
      </form>
      <footer>
        <p>
          New Customer ?<NavLink to="/signup"> Start Hear </NavLink>
          <p>
            Forgot Password ? <NavLink to="/forgotPassword">Reset</NavLink>
          </p>
        </p>
        {/* <NavLink to="/">Back To Home</NavLink> */}
      </footer>
    </div>
  );
};

export default Login;
