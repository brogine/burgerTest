import React from "react";
import classes from "./DrawerToggle.css";

const drawerToggle = (props) => {
  return (
    <div className={classes.Container} onClick={props.onMenuClicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;
