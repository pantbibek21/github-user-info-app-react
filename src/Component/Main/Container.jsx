import React from "react";
import styles from "./Container.module.css";
import UserCard from "./UserCard";
import UserInfo from "./UserInfo";
import Wrapper from "./Wrapper";

const Container = (props) => {
  return (
    <div className={styles.container}>
      <Wrapper class="top-wrapper">
        <UserCard></UserCard>
        <UserInfo></UserInfo>
      </Wrapper>
    </div>
  );
};
export default Container;
