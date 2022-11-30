import React from "react";
import styles from "./Container.module.css";
import UserCard from "./UserCard";
import UserInfo from "./UserInfo";
import Wrapper from "./Wrapper";
import PersonalRepos from "./PersonalRepos";
import ForkedRepos from "./ForkedRepos";
import octacat from "../../Assets/octacat.png";

const Container = (props) => {
  console.log(props.data);
  return (
    <div className={styles.container}>
      <Wrapper class="top-wrapper">
        <UserCard></UserCard>
        <UserInfo></UserInfo>
        <Wrapper class="octacat-wrapper">
          <img src={octacat} alt="A cute Octacat" />
        </Wrapper>
      </Wrapper>
      <Wrapper class="repos-wrapper">
        <PersonalRepos></PersonalRepos>
        <ForkedRepos></ForkedRepos>
      </Wrapper>
    </div>
  );
};
export default Container;
