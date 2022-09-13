import React from "react";
import style from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import UserInput from "./hooks/User-Input";
import axios from "axios";
const ForgotPassword = () => {
  let navigate = useNavigate();
  const {
    value: email,
    nameIsInValid: invalidEmail,
    onValueInputHandler: onEmailChangeHandler,
    onErrorHandler: emailBlurHandler,
    nameIsValid: validEmail,
    reset: resetHandler,
  } = UserInput((value) => value.includes("@gmail.com"));
// <--------------------Submit Forgot Password ------------------------------------>
  const onSubmitHandler = async (e) => {
     e.preventDefault();
    if (!validEmail) {
      return;
    }      
    axios.post("http://localhost:9092/forgot/", { email:email}).then((response)=>{
      console.log(response.data)
      navigate("/otp", { replace: true });
    }).catch((err)=>{
      console.log(err.data)
    })
    resetHandler();
  };

  return (
    <div className={style.loginContainer}>
      <h2>Password Reset</h2>
      <form action="" onSubmit={onSubmitHandler}>
        <div className={style.inputFiled}>
          <label htmlFor="email">Enter your email address </label>
          <input
            type="email"
            id="email"
            value={email}           
            onChange={onEmailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder="Enter Email Ex. sandeep@cbnits.com"
          />
          {invalidEmail && (
            <p className={style.error}>Enter your email address</p>
          )}
        </div>
        <div className={style.actionButton}>
          <button
            type="submit"
            // onClick={() => navigate("/reset", { replace: true })}
          >
            OTP Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;