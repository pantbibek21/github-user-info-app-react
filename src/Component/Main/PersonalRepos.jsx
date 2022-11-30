import React from "react";
import styles from "./PersonalRepos.module.css";
import Wrapper from "./Wrapper";
import RepoCard from "./RepoCard";
import Heading from "./Heading";
const PersonalRepos = () => {
  return (
    <React.Fragment>
      <Heading class="heading">Personal Repos</Heading>
      <Wrapper class="personalReposWrapper">
        <RepoCard></RepoCard>
      </Wrapper>
    </React.Fragment>
  );
};
export default PersonalRepos;
