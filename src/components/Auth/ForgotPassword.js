import React from "react";
import style from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import UserInput from "./hooks/User-Input";
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

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!validEmail) {
      return;
    }
    // let formData = new FormData();
    // formData.append("email", email);
    try {
      let forgot = await fetch(`http://localhost:9092/forgot?email=${email}`, {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: formData,
        // body: email
      });
      
      if (!forgot.ok) {
        throw new Error(`${forgot.status}`);
      } else {
        let response = await forgot.json();
        console.log(response);
        
      }
    } catch (error) {
      
      console.log(error);
    }
    navigate("/otp", { replace: true });
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
