import React, { EventHandler } from "react";
import { Button } from "react-bootstrap";
import { IKeypadProps, Vector } from "../types";
import styles from "../css/Keypad.module.css";
function Keypad({...KeypadProps} : IKeypadProps) {

    function handleKeypadPress(newDirection : string) : React.MouseEventHandler<HTMLButtonElement>
    {
        KeypadProps.onKeypadPress(newDirection);
        return;
    }

    return (
        <div className={styles.keypadContainer}>
            <Button onClick={() => handleKeypadPress("Up")}>Up</Button>
            <Button onClick={() => handleKeypadPress("Down")}>Down</Button>
            <Button onClick={() => handleKeypadPress("Right")}>Right</Button>
            <Button onClick={() => handleKeypadPress("Left")}>Left</Button>
        </div>
    )
}

export default Keypad;