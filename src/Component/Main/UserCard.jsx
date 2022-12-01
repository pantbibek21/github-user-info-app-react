import React from "react";
import styles from "./UserCard.module.css";
import { FaUsers } from "react-icons/fa";
const UserCard = ({ data }) => {
  let classname = "class";
  return (
    <div className={styles["user-card"]}>
      <div className={styles["img-wrapper"]}>
        <img
          src={data.avatar_url}
          alt="A github user profile image"
          className={styles["user-profile"]}
        />
      </div>
      <div className={styles["nameWrapper"]}>
        <span className={styles["name"]}>{data.name}</span>
        <a href={data.html_url} className={styles["username"]}>
          {data.login}
        </a>
      </div>
      <div className={styles["bio"]}>{data.bio}</div>
      <div className={styles["followers-wrapper"]}>
        <div className={styles.icon}>
          <FaUsers />
        </div>
        <span className={`${styles["count"]} ${styles["following-count"]}`}>
          {data.following}
        </span>{" "}
        following <span className={styles["dot"]}></span>
        <span className={`${styles["count"]} ${styles["followers-count"]}`}>
          {data.followers}
        </span>{" "}
        followers
      </div>
    </div>
  );
};

export default UserCard;
