import React from "react";
import styles from "./Header.module.css";
import Input from "./Input";

const Header = ({ getUsername }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles["heading-text"]}>
        Search the details of <span>GitHub</span> user
      </h1>
      <Input getUsername={getUsername} />
    </header>
  );
};

export default Header;
