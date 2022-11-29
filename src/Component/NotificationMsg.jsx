import React from "react";
import styles from "./NotificationMsg.module.css";

const NotificationMsg = (props) => {
  return <p className={styles.message}>{props.message}</p>;
};
export default NotificationMsg;
