import React from 'react';
import './App.css';
import Card1 from './components/function';
import Card2 from './components/class';

function App() {
    return (
        <div>
            <h1>Class Components</h1>
            <Card1 title="Functional Component" desc="lorem ispam dolar sit" />

            <Card2 title="Class Component" desc="this is a class component" />
        </div>
    );
}

export default App;
