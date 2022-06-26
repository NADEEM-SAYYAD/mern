import { useState } from "react";
import "./style.css";

const Signup = ({ displayLogin, loginHandler }) => {
  const [user, setUsers] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    rpassword: "",
  });

  const { username, password, firstname, lastname, rpassword } = user;

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...user,
      [name]: value,
    });
  };

  const signUpHandler = (e) =>{
    console.log("Submit the form")
  }
  return (
    <div autoComplete="off" style={{ border: "1px solid #ccc" }}>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this htmlForm to create an account.</p>
        <hr />

        <label htmlFor="username">
          <b>User Name</b>
        </label>
        <input
          type="text"
          placeholder="User Name"
          name="username"
          id="username"
          value={username}
          onChange={inputHandler}
        />

        <label htmlFor="firstName">
          <b>First Name</b>
        </label>
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={inputHandler}
        />

        <label htmlFor="lastName">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          id="lastname"
          value={lastname}
          onChange={inputHandler}
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          value={password}
          onChange={inputHandler}
        />

        <label htmlFor="rpassword">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="rpassword"
          id="rpassword"
          value={rpassword}
          onChange={inputHandler}
        />

        <div className="clearfix">
          <button type="button" className="signupbtn" onClick={signUpHandler}>
            Sign Up
          </button>
          <button
            type="button"
            className="cancelbtn"
            onClick={(e) => loginHandler(!displayLogin)}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signup;