import React, { EventHandler } from "react";
import { Button } from "react-bootstrap";
import { IKeypadProps, Vector } from "../types";

function Keypad({...KeypadProps} : IKeypadProps) {

    function handleKeypadPress(newDirection : string) : React.MouseEventHandler<HTMLButtonElement>
    {
        KeypadProps.onKeypadPress(newDirection);
        return;
    }

    return (
        <>
            <Button onClick={() => handleKeypadPress("Up")}>Up</Button>
            <Button onClick={() => handleKeypadPress("Down")}>Down</Button>
            <Button onClick={() => handleKeypadPress("Right")}>Right</Button>
            <Button onClick={() => handleKeypadPress("Left")}>Left</Button>
        </>
    )
}

export default Keypad;