import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current price: <strong>${props.totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          onIngredientAdded={() => props.onIngredientAdded(ctrl.type)}
          onIngredientRemoved={() => props.onIngredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        onClick={props.onPurchasing}
        disabled={!props.purchaseable}
        className={classes.OrderButton}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
