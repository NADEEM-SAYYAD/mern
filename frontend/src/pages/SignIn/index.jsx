import React from "react";
import "./style.css";

const Signin = ({setLogin,displayLogin,loginHandler}) => {
  const loginSubmitHandler = (e) =>[
    setLogin(preVal=>!preVal)
  ]

  return (
    <div autoComplete="off" style={{ border: "1px solid #ccc" }}>
      <div className="container">
        <h1>Sign In</h1>

        <label htmlFor="username">
          <b>User Name</b>
        </label>
        <input type="text" placeholder="User Name" name="username" id="username"/>

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" name="psw" id="psw"/>

        <div className="clearfix">
          <button type="button" className="signupbtn" onClick={(e)=>loginSubmitHandler(e)}>
            Sign In
          </button>
          <button type="button" className="cancelbtn" onClick={(e)=>loginHandler(!displayLogin)}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signin;
