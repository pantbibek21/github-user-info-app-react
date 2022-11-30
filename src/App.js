import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Container from "./Component/Main/Container";

const App = () => {
  const [isDataArrived, setIsDataArrived] = useState(false);
  const notification = {};
  let githubUserData = {};
  const fetchUser = async (user) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) {
        if (response.status == 404) {
          throw new Error("Couldn't find user 😿");
        }
        throw new Error();
      }
      const data = await response.json();
      //set the data to UI
      //Configure the data Object and send to component Container
      githubUserData = data;
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
      <Header getUsername={getUsername} />
      {isDataArrived && <Container data={githubUserData} />}
    </div>
  );
};

export default App;
