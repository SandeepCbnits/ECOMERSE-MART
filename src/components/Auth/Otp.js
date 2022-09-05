import React from "react";
import UserInput from "./hooks/User-Input";
import style from "./Otp.module.css";
import { useNavigate } from "react-router-dom";
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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validOtp) {
      return;
    }

    // let formData = new FormData();
    // formData.append("email", email);
    // console.log(isNaN(otp))
    try {
      let otpSends= await fetch("http://localhost:9092/verifyOtp?otp="+otp,{
        method:"POST",
        // headers:{
        //   "Content-Type":"application/json"
        // },
        // body: otp
      })
      if (!otpSends.ok) {
        throw new Error(`Somthing Went Worng`)
      } else {
        let response = await otpSends.json();
        console.log(response)
        navigate("/passwordReset", {replace: true} )
      }
    } catch (error) {
      // alert(error)
    }
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
