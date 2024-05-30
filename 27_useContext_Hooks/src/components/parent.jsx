import {createContext, useState} from 'react';
export const userContext = createContext();

import Child1 from './child1';

const Parent = () => {
    const [data, setData] = useState({
        name: 'A h shobuj',
        id: 9101,
    });
    const [text, setText] = useState('Lorem ispam dolar shet ');

    return (
        <userContext.Provider value={{data, text}}>
            <Child1 />
        </userContext.Provider>
    );
};

export default Parent;
