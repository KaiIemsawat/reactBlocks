import React from "react";
import styles from "./styles.module.css";
import layout from "./layout.module.css";

const Header = () => {
    return (
        <div
            className={`${styles.headerColor} ${styles.border} ${layout.header}`}></div>
    );
};

export default Header;
