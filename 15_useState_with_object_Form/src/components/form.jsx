import {useState} from 'react';

export default function FORM() {
    const [user, setUser] = useState({name: '', email: '', password: ''});

    const {name, email, password} = user;

    const singleEventHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    return (
        <div>
            <h1>Form Controlled and get ,send value with useState</h1>

            <form
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(user);
                }}>
                <div className="styleDiv">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        required
                        onChange={singleEventHandler}
                        /* onChange={(e) => {
                            setUser({name: e.target.value, email, password});
                        }} */
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
                        onChange={singleEventHandler}
                        /* onChange={(e) => {
                            setUser({name, email: e.target.value, password});
                        }} */
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
                        onChange={singleEventHandler}
                        /* onChange={(e) => {
                            setUser({name, email, password: e.target.value});
                        }} */
                    />
                </div>

                <div className="styleDiv">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}
