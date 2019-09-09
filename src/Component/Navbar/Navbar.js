import React from "react";
import Style from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <nav>
        <div className={Style.logo+" "+Style.fix}>
          <img src="https://b.zmtcdn.com/images/icons/get-the-app-plain.svg" />
          <span>Get the App</span>
        </div>

        <ul>
          <li className={Style.links}>
            <div className={Style.logo}>
              <img src="https://b.zmtcdn.com/images/icons/order-online.svg" />
              <span>Get the App</span>
            </div>
          </li>
          <li className={Style.links}>
            <div className={Style.logo}>
              <img src="https://b.zmtcdn.com/images/icons/book-a-table.svg" />
              <span>Get the App</span>
            </div>
          </li>{" "}
          <li className={Style.links}>
            <div className={Style.logo}>
              <img src="https://b.zmtcdn.com/images/icons/header_gold_icon.svg" />
              <span>Get the App</span>
            </div>
          </li>
        </ul>
        
      </nav>
    </>
  );
}

export default Navbar;
