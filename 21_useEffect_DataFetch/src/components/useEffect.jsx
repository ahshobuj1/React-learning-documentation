import {useEffect, useState} from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('call useEffect');
    }, [count]);

    return (
        <div>
            <h2>useEffect - Count : {count}</h2>

            <button onClick={() => setCount((count) => count + 1)}> + </button>
        </div>
    );
};

export default UseEffect;
