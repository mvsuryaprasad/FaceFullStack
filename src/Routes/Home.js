import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Appcontext } from "../App";
import "./routestyles.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import context from "react-bootstrap/esm/AccordionContext";

export default function Home() {
  const [data, setdata] = useState([]);
  const [num, setnum] = useState(20);
  const [load, setloading] = useState(null);
  const { but, setbut } = useContext(Appcontext);

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=${num}`).then((res) => {
      setdata([...data, ...res.data.results]);
      setloading(!null);
    });
  }, [num]);

  const scrolltoEnd = () => {
    setnum(num + 20);
    setloading(null);
  };
  window.onscroll = function () {
    if (
      window.innerHeight + Math.floor(document.documentElement.scrollTop) + 5 >=
      document.documentElement.offsetHeight
    ) {
      scrolltoEnd();
    }
  };
  console.log(data[0]);
  if (but === true) {
    return (
      <div className="main">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={!load}
        >
          <CircularProgress color="inherit" />
          <div>
            <h2>loading..</h2>
          </div>
        </Backdrop>
        <div className="main-content">
          {data.length > 0 &&
            data.map((el, i) => (
              <div className="content">
                <span className="content-left">
                  <div className="content-name">
                    {el.name.first + " " + el.name.last}
                  </div>
                  <div>{el.location.city}</div>
                </span>

                <span className="content-right">
                  <img src={el.picture.thumbnail} />
                </span>
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
