import React from "react";
import "./Card.css";
import "./ExpenseItem.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
