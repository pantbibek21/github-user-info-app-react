import React from "react";
import styles from "./PersonalRepos.module.css";
import Wrapper from "./Wrapper";
import RepoCard from "./RepoCard";
import Heading from "./Heading";
const PersonalRepos = ({ repoConfigObjectArr }) => {
  return (
    <React.Fragment>
      <Heading class="heading">Personal Repos</Heading>
      <Wrapper class="personalReposWrapper">
        {repoConfigObjectArr.map((data, index) => {
          return <RepoCard data={data} key={index}></RepoCard>;
        })}
      </Wrapper>
    </React.Fragment>
  );
};
export default PersonalRepos;
