/* eslint-disable react/prop-types */
import '../App.css';

import {useUserContext} from '../hooks/useUserContext';

const User = (props) => {
    const {users, setUsers} = useUserContext();

    const handleRemove = (id) => {
        let filteredUsers = users.filter((user) => user.id !== id);
        setUsers(filteredUsers);
    };

    return (
        <section id="section">
            <h1>{props.user.username}</h1>
            <h5>{props.user.id}</h5>
            <button onClick={() => handleRemove(props.user.id)}>Delete</button>
        </section>
    );
};

export default User;

//* short ways
/* import '../App.css';

import {useUserContext} from '../hooks/useUserContext';

const User = (props) => {
    const {users, setUsers} = useUserContext();

    return (
        <section id="section">
            <h1>{props.user.username}</h1>
            <h5>{props.user.id}</h5>

            <button
                onClick={() =>
                    setUsers(users.filter((user) => user.id !== props.user.id))
                }>
                Delete
            </button>
        </section>
    );
};

export default User; */
