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
    

    try {
      let otpGenrate = await fetch("http://localhost:9092/forgot", {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify( email ),
      });
      if (!otpGenrate.ok) {
        throw new Error(` ${otpGenrate.status}`);
      } else {
        let respoonse = await otpGenrate.json();
        console.log(respoonse);
        navigate("/reset", { replace: true });
        alert("OTP SENDING ON YOOR EMAIL")
      }
    } catch (error) {
      alert(`Somthing Went Worng !! ${error}`);
      console.log("Somthing Went Worng !!", error);
    }

      resetHandler()
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

// Jagrati Khatri4:49 PM
// const options = {
//   method: 'post',
//   headers: {
//     'Accept': 'application/json, text/plain, */*',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(card_data)
// }

// fetch('http://localhost:3000/api/new-card', options)
//   .then(response => {
//      console.log(request)
//      if (response.ok) {
//          return response.json();
//        } else {
//           throw new Error('Something went wrong ...');
//        }
//   })
//   .then(data => this.setState({ creditcards: data.creditcards }
// fkz-eyhk-fyy
