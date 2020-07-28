import React from "react";
import classes from "./BuildControl.css";

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.label}>{props.label}</div>
      <button
        disabled={props.disabled}
        onClick={props.onIngredientRemoved}
        className={classes.Less}
      >
        Less
      </button>
      <button onClick={props.onIngredientAdded} className={classes.More}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
