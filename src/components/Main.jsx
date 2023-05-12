import React from "react";
import styles from "./styles.module.css";
import layout from "./layout.module.css";
import Subcontent from "./Subcontent";
import Advertisement from "./Advertisement";

const Main = () => {
    return (
        <div className={`${styles.mainColor} ${styles.border} ${layout.main}`}>
            <div className={layout.containSub}>
                <Subcontent />
                <Subcontent />
                <Subcontent />
            </div>
            <Advertisement />
        </div>
    );
};

export default Main;
