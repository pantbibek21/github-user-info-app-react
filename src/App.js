import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Component/Header";
import NotificationMsg from "./Component/NotificationMsg";

const App = () => {
  const notification = {};
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
    </div>
  );
};

export default App;
