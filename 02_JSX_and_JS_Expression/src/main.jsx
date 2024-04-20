import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

let first = 'Home';
let second = 'Contact';
let third = 'Blog';
let fourth = 'About';
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hours = date.getHours();
let min = date.getMinutes();

root.render(
    <div>
        <ul>
            <li>Nav Var Items</li>
            <li>
                <a
                    href="#"
                    onClick={() => {
                        alert`You have clicked`;
                    }}>
                    {first}
                </a>
            </li>
            <li onClick={() => alert`ahshobuj11@gmail.com`}>{second}</li>
            <li>{third}</li>
            <li
                onClick={() => {
                    let h2 = document.querySelector(`h2`);
                    h2.innerText = `This is A H Shobuj`;
                    setTimeout(() => {
                        h2.innerText = ``;
                    }, 2000);
                }}>
                {fourth}
            </li>
            <li> {hours + ':' + min + '-' + day + '-' + month + '-' + year}</li>
        </ul>
        <h2></h2>
    </div>
);
