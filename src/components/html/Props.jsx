import React from "react";

function Btn({text,changesValue}) {
    const style = {
        backgroundColor : 'blue'
    }
    return (
        <button
            onClick={changesValue}       
            style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            fontSize: '16px',
        }}>
            {text}
        </button>

    );
}
const MemorizeBtn = React.memo(Btn)
function App(){
    const [value, setValue] = React.useState("Save Changes")
    const changesValue = () => setValue("Revert Changes")
   
    return(
        <div>
            <MemorizeBtn text={value} changesValue={changesValue}/>
            <MemorizeBtn text="Continue"/>
        </div>
    )
}

export default App;