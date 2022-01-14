import React from "react";

function Cell({color = "black"}){
    return(
        <>
        <div style={
            {
                height : "10px",
                width : "10px",
                backgroundColor : color,
                padding: "0px",
                margin: "1px"
            }
        }></div>
        </>
    )
}

export default Cell;