import React, {useState} from 'react';

export default function FORM() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let userInfo = {
        name: name,
        email: email,
        password: password,
    };

    return (
        <div>
            <h1>Form Controlled and get ,send value with useState</h1>

            <form
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(userInfo);
                }}>
                <div className="styleDiv">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="styleDiv">
                    <label htmlFor="email">Email: </label>
                    <input
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="styleDiv">
                    <label htmlFor="password">Password: </label>
                    <input
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="styleDiv">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}
