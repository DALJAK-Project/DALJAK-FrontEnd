import React from "react";

function Nav() {
  return (
    <div>
      <nav className="header-bar">
        <div className="header-bar__menu">
          <ul>
            <li>Home</li>
            <li>다른달작</li>
            <li>내달작</li>
            <li>커뮤니티</li>
          </ul>
        </div>
        <div className="header-bar__login">
          <div className="header-bar__signup">
            <div className="header-bar__signup--square"></div>
            <span className="header-bar__signup--text">Sign up</span>
          </div>
          <span className="header-bar__login--text">Log in</span>
          <div className="header-bar__login--profile">
            <i className="far fa-user-circle fa-2x"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
