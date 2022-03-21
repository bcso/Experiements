import React, { EventHandler } from "react";
import { Button, Row } from "react-bootstrap";
import { IKeypadProps, Vector } from "../types";
import styles from "../css/Keypad.module.css";
function Keypad({...KeypadProps} : IKeypadProps) {

    function handleKeypadPress(newDirection : string) : React.MouseEventHandler<HTMLButtonElement>
    {
        KeypadProps.onKeypadPress(newDirection);
        return;
    }

    return (
        <>
        
        <div className={styles.keypadContainer}>
            <Button size='lg' className={styles.keypadButton} onClick={() => handleKeypadPress("Up")}>^</Button>
        </div>
        <div className={styles.keypadContainer}>
            <Button size='lg' className={styles.keypadButton} onClick={() => handleKeypadPress("Left")}>&lt;</Button>
            <Button size='lg' className={styles.keypadButton} onClick={() => handleKeypadPress("Down")}>v</Button>
            <Button size='lg' className={styles.keypadButton} onClick={() => handleKeypadPress("Right")}>&gt;</Button>
        </div>
        </>
    )
}

export default Keypad;