import React from "react";
import styles from "./UserCard.module.css";
const UserCard = () => {
  return (
    <div className={styles["user-card"]}>
      <div className={styles["img-wrapper"]}>
        <img
          src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Randy"
          className={styles["user-profile"]}
        />
      </div>
      <div className={styles["nameWrapper"]}>
        <span className={styles["name"]}>Bibek Pant</span>
        <a href="" className={styles["username"]}>
          pantbibek21
        </a>
      </div>
      <div className={styles["bio"]}>I am a super hero</div>
      <div className={styles["followers-wrapper"]}>
        <i class="fa-solid fa-user-group"></i>
        <span className={`${styles["count"]} ${styles["following-count"]}`}>
          12
        </span>{" "}
        following <span className={styles["dot"]}></span>
        <span className={`${styles["count"]} ${styles["following-count"]}`}>
          12
        </span>{" "}
        followers
      </div>
    </div>
  );
};

export default UserCard;
