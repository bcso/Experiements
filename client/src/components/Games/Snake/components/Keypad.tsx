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
        <div>
            <div className={styles.keypadContainer}>
                <Button size='lg' className={styles.keypadButton} onClick={() => handleKeypadPress("Up")}>&#8679;</Button>
            </div>
            <div className={styles.keypadContainer}>
                <Button size='lg' className={styles.keypadButton} onClick={() => handleKeypadPress("Left")}>&#8678;</Button>
                <Button size='lg' className={styles.keypadButton} onClick={() => handleKeypadPress("Down")}>&#8681;</Button>
                <Button size='lg' className={styles.keypadButton} onClick={() => handleKeypadPress("Right")}>&#8680;</Button>
            </div>
        </div>
    )
}

export default Keypad;