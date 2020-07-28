import React from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100VH",
          opacity: props.show ? "1" : "0",
        }}
        className={classes.Modal}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
