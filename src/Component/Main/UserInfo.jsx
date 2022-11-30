import React from "react";
import styles from "./UserInfo.module.css";

const UserInfo = () => {
  return (
    <div className={styles["user-details"]}>
      <div className={styles["row"]}>
        <label>Name : </label>
        <span>Bibek Pant</span>
      </div>
      <div className={styles["row"]}>
        <label>Username : </label>
        <span>pantbibek21</span>
      </div>
      <div className={styles["row"]}>
        <label>Location : </label>
        <span>Kathmandu, Nepal</span>
      </div>
      <div className={styles["row"]}>
        <label>Website : </label>
        <span>bibekpant.com.np</span>
      </div>
      <div className={styles["row"]}>
        <label>Twitter : </label>
        <span>pantbiebk21</span>
      </div>
      <div className={styles["row"]}>
        <label>Public Repository : </label>
        <span>30</span>
      </div>
      <div className={styles["row"]}>
        <label>Star earned: </label>
        <span>12</span>
      </div>
      <div className={styles["row"]}>
        <label>Total Commits : </label>
        <span>121</span>
      </div>
      <div className={styles["row"]}>
        <label>Created on : </label>
        <span>2018-12-12</span>
      </div>
      <div className={styles["row"]}>
        <label>Last commited on : </label>
        <span>1011-12-12</span>
      </div>
      <div className={styles["row"]}>
        <label>Organizations : </label>
        <span className={styles["organizations"]}>Leapfrog Technology</span>
      </div>
    </div>
  );
};

export default UserInfo;
