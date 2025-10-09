import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [loginBtnLabel, setLoginBtnLabel] = useState("Login");

  return (
    <div className="header-block">
      <div className="header">
        <img src={LOGO_URL}></img>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
