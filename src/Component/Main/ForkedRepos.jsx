import React from "react";
import styles from "./ForkedRepos.module.css";
import Heading from "./Heading";
import RepoCard from "./RepoCard";
import Wrapper from "./Wrapper";

const ForkedRepos = () => {
  return (
    <React.Fragment>
      <Heading class="heading">Forked Repos</Heading>;
      <Wrapper class="forkedReposWrapper">
        <RepoCard></RepoCard>
      </Wrapper>
    </React.Fragment>
  );
};

export default ForkedRepos;
