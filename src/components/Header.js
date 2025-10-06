import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header-block">
      <div className="header">
        <img src={LOGO_URL}></img>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Link</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
