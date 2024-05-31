import User from './User';
import '../App.css';

import {useUserContext} from '../hooks/useUserContext';

const Users = () => {
    const {users} = useUserContext();
    console.log(users);

    return (
        <div id="flex">
            {users.map((user) => {
                return <User key={user.id} user={user} />;
            })}
        </div>
    );
};

export default Users;

//import {useContext} from 'react';
//import {UserContext} from '../hooks/useUserContext';
//const {users} = useContext(UserContext);
