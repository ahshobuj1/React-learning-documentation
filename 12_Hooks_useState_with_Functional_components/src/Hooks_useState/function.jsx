import {useState} from 'react';

export default function HooksFunction() {
    const [count, setState] = useState(0);
    return (
        <div>
            <h1>UseState with Functional Components</h1>
            <h2>Count :{count}</h2>
            <button
                onClick={() => {
                    setState(count + 1);
                    setState((count) => count + 1); // Previous state
                }}>
                Increment++
            </button>
            <button
                onClick={() => {
                    setState(count - 1);
                }}>
                Decrement--
            </button>
        </div>
    );
}
