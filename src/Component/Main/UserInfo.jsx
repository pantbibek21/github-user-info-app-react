import React, { useEffect, useState } from "react";
import Organization from "./Organization";
import styles from "./UserInfo.module.css";

const UserInfo = ({ data, starEarnCount, publicReposCount }) => {
  const endIndex = data.created_at.indexOf("T");
  const created_on = data.created_at.slice(0, endIndex);
  const last_committed_on = data.updated_at.slice(0, endIndex);
  const organizationUrl = data.organizations_url;

  return (
    <div className={styles["user-details"]}>
      <div className={styles["row"]}>
        <label>Name : </label>
        <span>{data.name}</span>
      </div>
      <div className={styles["row"]}>
        <label>Username : </label>
        <span>{data.login}</span>
      </div>
      <div className={styles["row"]}>
        <label>Location : </label>
        <span>{data.location || "N/A"}</span>
      </div>
      <div className={styles["row"]}>
        <label>Website : </label>
        <span>{data.blog || "N/A"}</span>
      </div>
      <div className={styles["row"]}>
        <label>Twitter : </label>
        <span>{data.twitter_username || "N/A"}</span>
      </div>
      <div className={styles["row"]}>
        <label>Public Repository : </label>
        <span>{publicReposCount}</span>
      </div>
      <div className={styles["row"]}>
        <label>Star earned: </label>
        <span>{starEarnCount}</span>
      </div>
      <div className={styles["row"]}>
        <label>Total Commits : </label>
        <span>Couldn't count</span>
      </div>
      <div className={styles["row"]}>
        <label>Created on : </label>
        <span>{created_on}</span>
      </div>
      <div className={styles["row"]}>
        <label>Last commited on : </label>
        <span>{last_committed_on}</span>
      </div>
      <div className={styles["row"]}>
        <label>Organizations : </label>
        <span className={styles["organizations"]}>
          {<Organization url={organizationUrl} />}
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
