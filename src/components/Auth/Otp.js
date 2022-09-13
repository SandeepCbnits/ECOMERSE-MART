import React from "react";
import UserInput from "./hooks/User-Input";
import style from "./Otp.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Otp = () => {
  let navigate = useNavigate();
  const {
    value: otp,
    nameIsInValid: invalidOtp,
    onValueInputHandler: onOtpChangeHandler,
    onErrorHandler: otpBlurHandler,
    nameIsValid: validOtp,
    reset: resetHandler,
  } = UserInput((value) => value.trim() !== "");
// <--------------------Submit OTP------------------------------------>
  const onSubmitHandler = async (e) => {
    e.preventDefault();    
    if (!validOtp) {
      return;
    }
   axios.post("http://localhost:9092/verifyOtp/",{otp:otp}).then((res)=>{
    console.log(res.data)
    navigate("/passwordReset",{ replace: true})
   }).catch((err)=>{
    console.log(err)
   })   
    resetHandler();
  };

  return (
    <div className={style.loginContainer}>
      <h2>We sent a code to your email</h2>
      <form action="" onSubmit={onSubmitHandler}>
        <div className={style.inputFiled}>
          <label htmlFor="otp">
            Enter the 4-digit verification code sent to{" "}
          </label>
            <span>*****@gmail.com</span>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={onOtpChangeHandler}
            onBlur={otpBlurHandler}
            placeholder="Enter OTP Ex. 3021"
          />
          {invalidOtp && <p className={style.error}>Enter your otp</p>}
        </div>

        <div className={style.actionButton}>
          <button
            type="submit"            
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Otp;
