import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserInput from "./hooks/User-Input";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => { 
  const navigate = useNavigate();
  const [formIsValid, setFormIsValid] = useState(false);

  // const [formFields, setFormFields] = useState({
  //   userName: "",
  //   password: ""
  // })

  const {
    value: username,
    nameIsInValid: invalidUsername,
    onValueInputHandler: onUsernameChangeHandler,
    onErrorHandler: usernameBlurHandler,
    nameIsValid: validUsername,
    reset: resetUsernameHandler,
  } = UserInput((value) => value.trim() !== " ");

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
    if (!validUsername && !validPassword) {
      return;
    }

    try {
      let login = await fetch("http://localhost:9092/getToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username:username,
          password:password,
        }),
      });

      if (!login.ok) {
        throw new Error(`HTTP REQ ERROR ${login.status}`);
      } else {
       
        // let responseData = await login.json();
        const response = await login.json();       
        localStorage.setItem("USERNAME", username);
         localStorage.setItem("TOKEN", response.jwttoken);       
        navigate("/home", { replace: true });
        
        
      }
    } catch (error) {
      alert("Somthing Went Worng !!")     
    }
    
    resetUsernameHandler();
    resetPasswordrHandler();
  };

  const logoutHandler = () => {
    if (!validUsername && !validPassword) {
      return;
    }
    localStorage.setItem("USERNAME", null);
    localStorage.setItem("TOKEN", null);
   
  };

  useEffect(() => {
    if (validUsername && validPassword) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [validUsername, validPassword]);

  // const onInputChange = (attr, value) => {
  //   const tempFormFields = {...formFields};
  //   tempFormFields[attr] = value;
  //   setFormFields(prev => prev = tempFormFields);
  // }
  //const formControlClass = invalidEmail ? "inputFiled invalid" : "inputFiled"
  return (
    <div className={style.loginContainer}>
      <h3 className={style.title}>Sign-In</h3>
      <form action="" onSubmit={onSubmitHandler}>
        <div className={style.inputFiled}>
          <label htmlFor="username">First Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={onUsernameChangeHandler}
            onBlur={usernameBlurHandler}
            placeholder="Name Ex. Sandeep, Jagriti"
          />
          {invalidUsername && (
            <p className={style.error}>Enter your email address</p>
          )}
        </div>
        <div className={style.inputFiled}>
          <label htmlFor="password">Password</label>
          {/* <input
            type="password"
            id="password"
            placeholder="At list 6 charector Ex 123456"
            value={formFields.password}
            onChange={(e) => onInputChange('password', e.target.value)}
            onBlur={passwordBlurHandler}
          /> */}
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

        <div className={style.loginActionButton}>
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
    
      </footer>
    </div>
  );
};

export default Login;
