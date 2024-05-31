/* eslint-disable react/prop-types */
import {useState} from 'react';
import '../App.css';

import {useUserContext} from '../hooks/useUserContext';

const NewUser = () => {
    const {setUsers} = useUserContext();

    const [newUser, setNewUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userName = {
            id: new Date().toISOString(),
            username: newUser,
        };

        setUsers((oldUsers) => [...oldUsers, userName]);
        setNewUser('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username"></label>
            <input
                type="text"
                placeholder="Type your name"
                id="username"
                name="username"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
            />

            <button style={{color: 'red', width: '100px'}} type="submit">
                Add
            </button>
        </form>
    );
};

export default NewUser;
