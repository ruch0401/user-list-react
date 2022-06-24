import React from "react";

import classes from "./Card.module.css";

// since this is a custom UI component, react build process does not know what to do with className attribute that is passed to this custom Card attribute.
// Due to this, we need to accept the className attribute in our custom UI component and then add it to the existing css class listings using a template literal
// to finally add the styling class passed to the custom UI component from the original parent component

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
