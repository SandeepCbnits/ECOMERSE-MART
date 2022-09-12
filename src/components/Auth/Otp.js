import React, { useState } from "react";
import UserInput from "./hooks/User-Input";
import style from "./Otp.module.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Otp = () => {
  let navigate = useNavigate();
  // const {
  //   value: otp,
  //   nameIsInValid: invalidOtp,
  //   onValueInputHandler: onOtpChangeHandler,
  //   onErrorHandler: otpBlurHandler,
  //   nameIsValid: validOtp,
  //   reset: resetHandler,
  // } = UserInput((value) => value.trim() !== "");

  const [otp, setOtp] = useState({
    otp: ""
  })
  const [ error ,setError]=useState("");
  const onOtpChangeHandler = (e) => {
    const value = e.target.value
    console.log({ [e.target.name]: value })
    setOtp({ ...otp, [e.target.name]: value })
    console.log(otp.otp+" jkjkknh")
  }
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:9092/verifyOtp`, otp ).then(res=>{
      navigate("/passwordReset", { replace: true });
      console.log(res.data + "dekh rahi hu email aa raha hai ki nahi ")
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        setError(error.response.data);
        console.log(error.response.headers);
      }
    })
  }
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();

  //   axios.post("http://localhost:9092/verifyOtp").then(res => {
  //     console.log(res)
  //     navigate("/passwordReset", { replace: true });
     
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  //   if (!validOtp) {
  //     return;
  //   }
  //   try {
  //     let otps = await fetch("http://localhost:9092/verifyOtp", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         otp:otp,
  //       }),
  //     });
  //     if (!otps.ok) {        
  //       throw new Error(`Http req are genration error ${otps.status}`);

  //     } else {
  //       let respoonse = await otps.json();
  //       console.log(respoonse, "Getting Thinking OTP");
  //       navigate("/passwordReset", { replace: true });
  //     }
  //   } catch (error) {
  //     alert("Somthing Went Worng !!")
  //     console.log("Bad Req ", error);
  //   }


  //   resetHandler();
  // };

  return (
    <div className={style.loginContainer}>
      <h2>We sent a code to your email</h2>
      <form  method="post">
        <div className={style.inputFiled}>
          <label htmlFor="otp">
            Enter the 4-digit verification code sent to{" "}
          </label>
          <span>*****@gmail.com</span>
          <input
            type="text"
            id="otp"
            value={otp.otp}
            name="otp"
            onChange={onOtpChangeHandler}

            placeholder="Enter OTP Ex. 3021"
          />
          {/* {invalidOtp && <p className={style.error}>Enter your otp</p>} */}
        </div>

        <div className={style.actionButton}>
          <button
            type="submit"
            onClick={onSubmitHandler}
          >
            Submit
          </button>
        </div>

       
    <h6 className={style.alert}>{error}</h6> 
    <br/>
      </form>
    </div>
  );
};

export default Otp;
