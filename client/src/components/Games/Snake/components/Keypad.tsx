import React, { EventHandler } from "react";
import { Button, Row } from "react-bootstrap";
import { Direction, IKeypadProps, Vector } from "../types";
import styles from "../css/Keypad.module.css";
function Keypad({...KeypadProps} : IKeypadProps) {

    function handleKeypadPress(newDirection : Direction) : React.MouseEventHandler<HTMLButtonElement>
    {
        KeypadProps.onKeypadPress(newDirection);
        return;
    }

    return (
        <div>
            <div className={styles.keypadContainer}>
                <Button size='lg' className={styles.keypadButton} onClick={() => handleKeypadPress(Direction.Up)}>&#8679;</Button>
            </div>
            <div className={styles.keypadContainer}>
                <Button size='lg' className={styles.keypadButton} onClick={() => handleKeypadPress(Direction.Left)}>&#8678;</Button>
                <Button size='lg' className={styles.keypadButton} onClick={() => handleKeypadPress(Direction.Down)}>&#8681;</Button>
                <Button size='lg' className={styles.keypadButton} onClick={() => handleKeypadPress(Direction.Right)}>&#8680;</Button>
            </div>
        </div>
    )
}

export default Keypad;