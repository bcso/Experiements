import React from "react";

function Cell({color = "black"}){
    return(
        <>
        <div style={
            {
                height : "30px",
                width : "30px",
                backgroundColor : color,
                padding: "0px",
                margin: "1px"
            }
        }></div>
        </>
    )
}

export default Cell;