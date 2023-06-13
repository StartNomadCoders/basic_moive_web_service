import { useState, useEffect } from 'react';

function Hello(){
    const hiFn = () => {
        console.log("hi")
        return byeFn
    }
    const byeFn = () => {
        console.log("bye")
    }
    useEffect(hiFn, []);
    return <h1>Hello</h1>
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev)

    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;