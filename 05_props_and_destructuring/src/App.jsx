import React from 'react';
import Circle from './components/card';

function App() {
    return (
        <div>
            <div id="header">
                <h1>React Components</h1>
                <Circle titleText="A H Shobuj" desText="lorem 3 words" />

                <Circle desText="Components" titleText="Second Props" />

                <Circle desText="lorem 3" titleText="Thired" />

                <Circle titleText="Fourth" desText="None" />
            </div>
        </div>
    );
}

export default App;
