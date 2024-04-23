import React from 'react';
import './App.css';
import datas from './friends.json';

/* const users = [
    {
        name: 'a h shobuj',
        age: '20',
        phones: [{home: '01373447832', office: '01911111'}],
    },
    {
        name: 'sahed',
        age: '21',
        phones: [{home: '01833333', office: '0182222222'}],
    },
    {
        name: 'omayer',
        age: '22',
        phones: [{home: '0134444444', office: '019555555'}],
    },
    {
        name: 'santo',
        age: '23',
        phones: [{home: '019999994444', office: '0190005555'}],
    },
]; */

function App() {
    return (
        <div>
            <h1>Nested Mapping</h1>

            {datas.map((data, index) => (
                <div key={index}>
                    <h2>FullName :{data.name}</h2>
                    <h3>Age : {data.age}</h3>

                    {data.phones.map((phone) => (
                        <div>
                            <p>Home : {phone.home}</p>
                            <p>Office : {phone.office}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default App;
