import React, { useState } from "react";
import NotificationMsg from "./NotificationMsg";
import styles from "./Input.module.css";

function Input({ getUsername }) {
  const [input, setInput] = useState("");
  const [notification, setNotification] = useState("");
  const inputValidator = () => {
    if (input == "" || input.trim() == "") {
      setNotification("Invalid username 😭, search again :(");
      return;
    }

    if (input.trim().split(" ").length > 1) {
      setNotification("Invalid username 😭,username cannot have space :(");
      return;
    }
    getUsername(input);
  };

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    inputValidator();
  };

  const clearHandler = () => {
    setNotification("");
    setInput("");
  };
  return (
    <React.Fragment>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={input}
          onChange={onChangeHandler}
          placeholder="Enter the valid GitHub user name"
        />
        <div className={styles.buttons}>
          <button
            type="submit"
            className={`${styles.button} ${styles["search-btn"]}`}
          >
            Search
          </button>
          <button
            type="reset"
            onClick={clearHandler}
            className={`${styles.button} ${styles["clear-btn"]}`}
          >
            Clear
          </button>
        </div>
      </form>
      {notification && <NotificationMsg message={notification} />}
    </React.Fragment>
  );
}
export default Input;
