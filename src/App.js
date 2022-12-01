import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Container from "./Component/Main/Container";

function checkErrorInResponse(response) {
  if (!response.ok) {
    if (response.status == 404) {
      throw new Error("Couldn't find user 😿");
    }
    throw new Error();
  }
}

const App = () => {
  const [isDataArrived, setIsDataArrived] = useState(false);
  const notification = {};
  const [userRepoData, setUserRepoData] = useState();
  const [githubUserData, setGithubUserData] = useState();
  const fetchUser = async (user) => {
    try {
      //getting user repo data
      const responseFromRepo = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      checkErrorInResponse(responseFromRepo);
      const repoData = await responseFromRepo.json();
      setUserRepoData(repoData);
      //getting userdata
      const response = await fetch(`https://api.github.com/users/${user}`);
      checkErrorInResponse(response);
      const data = await response.json();
      //set the data to UI
      //Configure the data Object and send to component Container
      setGithubUserData(data);
      setIsDataArrived(true);

      notification.set("");
    } catch (error) {
      notification.set(error.message);
    }
  };
  const getUsername = (username, setNotification) => {
    //fetch the data of user named username
    notification.set = setNotification;
    fetchUser(username);
  };
  return (
    <div className="container">
      <Header getUsername={getUsername} reset={setIsDataArrived} />
      {isDataArrived && (
        <Container userdata={githubUserData} repodata={userRepoData} />
      )}
    </div>
  );
};

export default App;
