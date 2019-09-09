import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import food from "../../Assets/food.jpg";
import Style from "./Zomato.module.css";

class Zomato extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Navbar />
        <div className={Style.topContent}>
          <div className={Style.topImf}>
            <div className={Style.logo}>
              <img src="https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg" />
            </div>
            <div className={Style.tagLine}>
              <p>Find the best restaurants, cafés, and bars in Bengaluru</p>
            </div>
            <div className={Style.inputColl}>
              <input className={Style.city}></input>
              <input className={Style.cuisine}></input>
              <button className={Style.buttonClass}>Order</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Zomato;
