import React from "react";

function Btn({text,fontSize, changesValue}) {
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
            fontSize: fontSize
        }}>
            {text}
        </button>

    );
}
Btn.propTypes = {
    text: PropTypes.string.isRequired,
    //isRequired = 필수입력
    fontSize: PropTypes.number
}
const MemorizeBtn = React.memo(Btn)
function App(){
    const [value, setValue] = React.useState("Save Changes")
    const changesValue = () => setValue("Revert Changes")
    const style= {
        backgroundColor: #000
    }
    return(
        <div>
            <MemorizeBtn text={value} fontSize={18} changesValue={changesValue}/>
            <MemorizeBtn text="Continue"/>
        </div>
    )
}

export default App;