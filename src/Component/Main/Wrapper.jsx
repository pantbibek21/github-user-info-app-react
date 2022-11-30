import React from "react";
import styles from "./Wrapper.module.css";
const Wrapper = (props) => {
  let classes = props.class;
  return <div className={styles[classes]}>{props.children}</div>;
};

export default Wrapper;
