import React from "react";
import styles from "./styles.module.css";
import layout from "./layout.module.css";

const Subcontent = () => {
    return (
        <div
            className={`${styles.subContentColor} ${styles.border} ${layout.subcontent}`}></div>
    );
};

export default Subcontent;
