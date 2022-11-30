import React from "react";
import styles from "./Heading.module.css";

const Heading = (props) => {
  console.log(props);
  return <div className={`${styles[props["class"]]}`}>{props.children}</div>;
};

export default Heading;
