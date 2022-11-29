import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header";

const App = () => {
  const getUsername = (username) => {
    console.log("I got user name: " + username);
  };
  return (
    <div className="container">
      <Header getUsername={getUsername} />
    </div>
  );
};

export default App;
