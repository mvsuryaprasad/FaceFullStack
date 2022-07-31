import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../App";
import "./routestyles.css";
export default function Login() {
  const navigation = useNavigate();
  const name = useRef("");
  const pass = useRef("");
  const { but, setbut } = useContext(Appcontext);

  const handler = () => {
    console.log(but);
    if ((name.current.value.length > 0) & (pass.current.value.length > 0)) {
      setbut(true);
      navigation("/home", { state: { name: name.current.value } });
    } else {
      alert("Enter username and password");
    }
  };
  return (
    <div className="login-main">
      <div className="login name">
        <label>username</label>
        <input type="text" placeholder="Enter your username" ref={name}></input>
      </div>
      <div className="login pass">
        <label>password</label>
        <input type="password" placeholder="Enter your password" ref={pass} />
      </div>
      <div className="loginbutton sub">
        <button onClick={handler}>Login</button>
      </div>
    </div>
  );
}
