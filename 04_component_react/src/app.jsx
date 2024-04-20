import React from 'react';
import Circle from './components/Card';

function App() {
    return (
        <div>
            <div id="header">
                <h1>React Components</h1>
                <Circle titleText="Title one" desText="Description lorem" />
                <Circle />
                <Circle />
            </div>
        </div>
    );
}

export default App;
