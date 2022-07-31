import { createRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../App";
import "./compstyles.css";
export default function Navbar() {
  const [open, setopen] = useState(false);
  const isDesktop = window.innerWidth - 200;
  const { but, setbut } = useContext(Appcontext);
  const navigation = useNavigate();

  const handler = () => {
    if (open === false) {
      setopen(true);
    } else {
      setopen(false);
    }
  };

  const logout = () => {
    setbut(false);
    navigation("/");
  };

  return (
    <div className="navbar">
      <div className="container">
        <button type="button" class="button" onClick={handler}>
          ☰
        </button>
        <div class="dropdown" style={open ? {} : { display: "none" }}>
          <ul>
            <li onClick={handler}>Option 1</li>
            <li onClick={handler}>Option 2</li>
            <li onClick={handler}>Option 3</li>
            <li onClick={handler}>Option 4</li>
          </ul>
        </div>
      </div>
      <div className="navmain-content_searchbar">
        <div className="navmain-search">
          <div className="navmain-content_box">
            <input
              type="text"
              placeholder="What is on your mind today?"
              style={{ width: isDesktop }}
            />
            <a>search</a>
          </div>
        </div>
      </div>
      <div className="logout-button" style={{ display: but ? "flex" : "none" }}>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
