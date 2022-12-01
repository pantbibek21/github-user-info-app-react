import React from "react";
import styles from "./RepoCard.module.css";
import { FaLink } from "react-icons/fa";

const RepoCard = ({ data }) => {
  return (
    <div className={styles["repo"]}>
      <h3 className={styles["repo-name"]}>{data["name"]}</h3>
      <p className={styles["description"]}>{data["description"]}</p>
      <p className={styles["languages"]}>
        <span className={styles["label"]}>languages : </span>
        {data["language"]}
      </p>
      <p className="repo-created-on">
        <span className={styles["label"]}>repo created at : </span>
        {data["creation"]}
      </p>
      <p className={styles["repo-updated-on"]}>
        <span className="label">repo updated at : </span>
        {data["updation"]}
      </p>
      <a href={data["repoUrl"]} className={styles["repo-link"]}>
        Repo Link <FaLink />
      </a>
    </div>
  );
};

export default RepoCard;
