import React from "react";
import styles from "./styles.module.css";
import layout from "./layout.module.css";

const Navigation = () => {
    return (
        <div
            className={`${styles.navigationColor} ${styles.border} ${layout.navigation}`}></div>
    );
};

export default Navigation;
