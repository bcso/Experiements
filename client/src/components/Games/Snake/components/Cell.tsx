import React from "react";
import styles from "../css/Cell.module.css";

function Cell({color = "black"}){
    return(
        <div className={styles.baseCell} 
             style={{ backgroundColor : color}}
        />
    )
}

export default Cell;