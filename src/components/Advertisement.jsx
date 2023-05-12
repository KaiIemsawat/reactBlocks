import React from "react";
import styles from "./styles.module.css";
import layout from "./layout.module.css";

const Advertisement = () => {
    return (
        <div
            className={`${styles.advertisementColor} ${styles.border} ${layout.advertisement}`}></div>
    );
};

export default Advertisement;
