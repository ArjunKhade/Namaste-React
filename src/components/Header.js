import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [loginBtnLabel, setLoginBtnLabel] = useState("Login");

  const isOnline = useOnlineStatus();

  

  return (
    <div className="header-block">
      <div className="header">
        <img src={LOGO_URL}></img>
      </div>
      <div>
        <ul>
          <li>{isOnline? "😀":"😒"}</li>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/contact"}>Contact Us</Link>
          <Link to={"/grocery"}>Grocery</Link>
          <button
            onClick={() => {
              loginBtnLabel === "Login"
                ? setLoginBtnLabel("Logout")
                : setLoginBtnLabel("Login");
            }}
          >
            {loginBtnLabel}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
