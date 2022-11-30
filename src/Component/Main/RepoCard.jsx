import React from "react";
import styles from "./RepoCard.module.css";

const RepoCard = () => {
  return (
    <div className={styles["repo"]}>
      <h3 className={styles["repo-name"]}>pantbibek21/github-user-info-app</h3>
      <p className={styles["description"]}>
        Helps search and find GitHub user info in a organized manner, so you
        don't have to hassle with cluttered information
      </p>
      <p className={styles["languages"]}>
        <span className={styles["label"]}>languages : </span>"No language
        information available."
      </p>
      <p className="repo-created-on">
        <span className={styles["label"]}>repo created at : </span>2022-12-12
      </p>
      <p className={styles["repo-updated-on"]}>
        <span className="label">repo updated at : </span>2022-12-12
      </p>
      <a href="#" className={styles["repo-link"]}>
        Repo Link <i class="fa-solid fa-link"></i>
      </a>
    </div>
  );
};

export default RepoCard;
