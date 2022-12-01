import React, { useEffect, useState } from "react";
import styles from "./Organization.module.css";

const Organization = ({ url }) => {
  let orgArr = [];
  const [organizationArr, setOrganizationArr] = useState([]);
  useEffect(() => {
    async function fetchOrganizationDetail(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.length != 0) {
          data.forEach((ele) => {
            orgArr.push(ele);
          });
          setOrganizationArr((prev) => {
            prev = null;
            return orgArr;
          });
        } else {
          orgArr = [];
          setOrganizationArr((prev) => {
            prev = null;
            return orgArr;
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchOrganizationDetail(url);
  }, [url]);

  return (
    <React.Fragment>
      {organizationArr.length == 0
        ? "No organizations associated"
        : organizationArr.map((ele, index) => {
            return (
              <div className={styles.orgWrapper} key={index}>
                <span className={styles["organizationAvatar"]}>
                  <img src={ele.avatar_url} alt="org" />
                </span>
                &nbsp;
                <span className={styles["organizationName"]}> {ele.login}</span>
              </div>
            );
          })}
    </React.Fragment>
  );
};
export default Organization;
/*
{organizationArr.length == 0
        ? "No organization associated"
        : organizationArr.map((orgObj, index) => {
            return <div key={index}>{orgObj}</div>;
          })}
  let organizationTemplate = `<span className="organizationAvatar">
  <img src="${ele.avatar_url}" alt=""></span> <span className="organizationName">${ele.login}</span>`;
          */
