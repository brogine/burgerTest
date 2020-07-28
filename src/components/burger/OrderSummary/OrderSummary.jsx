import React from "react";
import Button from "../../ui/Button/Button";

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button onClick={props.onCancel} btnType="Danger">
        CANCEL
      </Button>
      <Button onClick={props.onContinue} btnType="Success">
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
