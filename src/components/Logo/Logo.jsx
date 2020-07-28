import React from "react";
import burgerLogo from "../../assets/133 burger-logo.png";
import classes from "./Logo.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
