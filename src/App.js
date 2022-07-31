import "./styles.css";
import {
  Route,
  Link,
  BrowserRouter,
  Routes,
  useNavigate
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import { createContext, useState } from "react";

export const Appcontext = createContext();

export default function App() {
  const [but, setbut] = useState(false);
  return (
    <Appcontext.Provider value={{ but, setbut }}>
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </div>
    </Appcontext.Provider>
  );
}
