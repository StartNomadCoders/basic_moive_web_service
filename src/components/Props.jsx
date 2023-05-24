import React, { useState } from "react";
function App(){
    return(
        <div>
            <Btn text=" "/>
            <Btn/>
        </div>
    )
}

function Btn(Props)  {
    return (
        <button style={{
            backgroundColor: "tomato",
            color:"white",
            padding:"10px 20px"
            border : 0,
            borderRedius: 10
            }}>
            Save Changes</button>
    )
}
function ConfirmBtn()  {
    return <button>Confirm</button>
}