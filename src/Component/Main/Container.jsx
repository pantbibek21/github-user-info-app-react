import React from "react";
import styles from "./Container.module.css";
import UserCard from "./UserCard";
import UserInfo from "./UserInfo";
import Wrapper from "./Wrapper";
import PersonalRepos from "./PersonalRepos";
import ForkedRepos from "./ForkedRepos";
import octacat from "../../Assets/octacat.png";
import RepoCard from "./RepoCard";

function filterRepos(repos) {
  const personalRepos = [];
  const forkedRepos = [];
  let starEarnCount = 0;
  let publicReposCount = 0;
  let dataObj = {};

  repos.forEach((repo) => {
    //count the Repo stars
    starEarnCount += repo.stargazers_count;
    dataObj = {
      name: repo.full_name,
      description: repo.description ?? "No description available. ",
      language: repo.language ?? "No language information available",
      creation: repo.created_at.split("T")[0],
      updation: repo.created_at.split("T")[0],
      repoUrl: repo.html_url,
    };

    if (repo.fork) {
      publicReposCount++;
      forkedRepos.push(dataObj);
    } else {
      publicReposCount++;
      personalRepos.push(dataObj);
    }
  });
  return [personalRepos, forkedRepos, starEarnCount, publicReposCount];
}

const Container = ({ userdata, repodata }) => {
  const [personalRepos, forkedRepos, starEarnCount, publicReposCount] =
    filterRepos(repodata);

  return (
    <div className={styles.container}>
      <Wrapper class="top-wrapper">
        <UserCard data={userdata}></UserCard>
        <UserInfo
          data={userdata}
          starEarnCount={starEarnCount}
          publicReposCount={publicReposCount}
        ></UserInfo>
        <Wrapper class="octacat-wrapper">
          <img src={octacat} alt="A cute Octacat" />
        </Wrapper>
      </Wrapper>
      <Wrapper class="repos-wrapper">
        <PersonalRepos repoConfigObjectArr={personalRepos}></PersonalRepos>
        <ForkedRepos repoConfigObjectArr={forkedRepos}></ForkedRepos>
      </Wrapper>
    </div>
  );
};
export default Container;
