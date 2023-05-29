import React from "react";
import { EnvelopeSimple,LockKey } from "phosphor-react";
import "./register.css";

export const Register = () => {
  return (
    <div className="images">
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw0ldJ_oXUuwtUCZb2SF8Hx-&ust=1685427850359000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPDzxJTymf8CFQAAAAAdAAAAABAE" alt=""/>
    <div className="container">
    <input type="checkbox" id="check"></input>
    <div className="login form">
      <header>LOGIN</header>
      <form action="#"> 
        <div className="login-form">
        <span className="icon-login"><EnvelopeSimple size={28}></EnvelopeSimple></span>
        <input type="text" id="email" placeholder="Enter your email" required></input>
        <span className="icon-login"><LockKey size={28}></LockKey></span>
        <input type="password" id="password" placeholder="Enter your password" required></input>
        </div>
        <a href="#">Forgot password?</a>
        <input type="button" className="button" value="Login"></input>
      </form>
      <div className="signup">
        <span className="signup">Don't have an account?
         <label for="check">Signup</label>
        </span>
      </div>
    </div>
    <div className="registration form">
      <header>SIGNUP</header>
      <form action="#">
        <div className="login-form">
        <span className="icon-login"><EnvelopeSimple size={28}></EnvelopeSimple></span>
        <input type="text" id="email" placeholder="Enter your email" required></input>
        <span className="icon-login"><LockKey size={28}></LockKey></span>
        <input type="password" id="password" placeholder="Create a password" required></input>
        <span className="icon-login"><LockKey size={28}></LockKey></span>
        <input type="password" id="password"  placeholder="Confirm your password" required></input>
        <input type="button" className="button" value="Signup" required></input>
        </div>
      </form>
      <div className="signup">
        <span className="signup">Already have an account?
         <label for="check">Login</label>
        </span>
      </div>
    </div>
  </div>
  </div>
  );
};
