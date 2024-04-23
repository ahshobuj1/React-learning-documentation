import React from 'react';
import Circle from './components/sub';
import data from './data.json';
import {v4 as uuidv4} from 'uuid';

function App() {
    return (
        <div>
            <div id="header">
                <h1>Title</h1>
                {data.map((item) => (
                    <Circle
                        titleText={item.title}
                        desText={item.desc}
                        key={console.log(uuidv4())}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
//
//
//
//

/* const array = [];
for (let x = 0; x < data.length; x++) {
    array.push(<Circle titleText={data[x].title} desText={data[x].desc} />);
}

function App() {
    return (
        <div>
            for loop
            <div id="header">
                <h1>Title</h1>
                {array}
            </div>
        </div>
    );
}

export default App; */
//
//
//
//
//
/* function App() {
    return (
        <div>
            Normal ways 

            <div id="header">
                <h1>Title</h1>
                <Circle titleText={data[0].title} desText={data[0].desc} />
                <Circle titleText={data[1].title} desText={data[1].desc} />
                <Circle titleText={data[2].title} desText={data[2].desc} />
            </div>
        </div>
    );
}

export default App; */
