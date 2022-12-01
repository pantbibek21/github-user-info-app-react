import React from "react";
import styles from "./ForkedRepos.module.css";
import Heading from "./Heading";
import RepoCard from "./RepoCard";
import Wrapper from "./Wrapper";

const ForkedRepos = ({ repoConfigObjectArr }) => {
  return (
    <React.Fragment>
      <Heading class="heading">Forked Repos</Heading>;
      <Wrapper class="forkedReposWrapper">
        {repoConfigObjectArr.map((data, index) => {
          return <RepoCard data={data} key={index}></RepoCard>;
        })}
      </Wrapper>
    </React.Fragment>
  );
};

export default ForkedRepos;
