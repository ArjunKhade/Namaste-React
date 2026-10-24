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
        <Link to="/" aria-label="Go to home">
          <img src={LOGO_URL} alt="Home" />
        </Link>
      </div>
      <nav className="header-nav" aria-label="Main navigation">
        <ul>
          <li
            className={`connection-status ${isOnline ? "online" : "offline"}`}
            role="status"
            aria-label={isOnline ? "Online" : "Offline"}
            title={isOnline ? "Online" : "Offline"}
          >
            {isOnline ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 8.8a15.8 15.8 0 0 1 20 0" />
                <path d="M5 12a11 11 0 0 1 14 0" />
                <path d="M8.5 15.5a5.5 5.5 0 0 1 7 0" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 8.8a15.8 15.8 0 0 1 20 0" />
                <path d="M5 12a11 11 0 0 1 14 0" />
                <path d="M8.5 15.5a5.5 5.5 0 0 1 7 0" />
                <circle cx="12" cy="19" r="1" />
                <path d="m4 4 16 16" />
              </svg>
            )}
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>
            <button
              className="login-button"
              onClick={() => {
                loginBtnLabel === "Login"
                  ? setLoginBtnLabel("Logout")
                  : setLoginBtnLabel("Login");
              }}
            >
              {loginBtnLabel}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
