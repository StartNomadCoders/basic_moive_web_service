import { useEffect, useState } from 'react';

function useEffectEx() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState('');
    const onClick = () => setCounter((v) => v + 1);
    const onChange = (e) => {
        setKeyword(e.target.value);
    };
    const iRunOnlyOne = () => {
        console.log('i run only one');
    };
    useEffect(iRunOnlyOne, []);
    useEffect(() => {
        if(keyword !== '' && keyword.length > 5){
            console.log('SERACH FOR', keyword)
        }
    },[keyword]);
    useEffect(() => {
        console.log('SERACH FOR KEYWORD AND COUNTER')

    },[keyword,counter]);
    return (
        <div>
            <input
                value={keyword}
                text="text"
                placeholder="Search Here"
                onChange={onChange}
            ></input>
            <h1>{counter}</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    );
}

export default useEffectEx;
