import React from "react";
import UserInput from "./hooks/User-Input";
import style from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  let navigate = useNavigate();
  const {
    value: email,
    nameIsInValid: invalidEmail,
    onValueInputHandler: onEmailChangeHandler,
    onErrorHandler: emailBlurHandler,
    nameIsValid: validEmail,
    reset: resetHandler,
  } = UserInput((value) => value.includes("@"));

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validEmail) {
      return;
    }
    try {
      let otpGenrate = await fetch(`http://localhost:9092/forgot?email=${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify({
         email
        }),
      })
      if (!otpGenrate.ok) {
        throw new Error(`Http req are genration error ${otpGenrate.status}`)
      }else{
        let respoonse = await otpGenrate.json();
        console.log(respoonse)
      }
    } catch (error) {
      console.log("Bad Req ", error)
    }
    navigate("/reset", { replace: true })
   
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
