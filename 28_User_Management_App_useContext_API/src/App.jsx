import {useState} from 'react';
import {UserContext} from './hooks/useUserContext';

import Users from './components/Users';
import NewUser from './components/NewUser';

function App() {
    const [users, setUsers] = useState([
        {id: 9101, username: 'shobuj'},
        {id: 9102, username: 'Alex'},
        {id: 9103, username: 'Roses'},
    ]);

    return (
        <UserContext.Provider value={{users, setUsers}}>
            <NewUser />
            <Users />
        </UserContext.Provider>
    );
}

export default App;

//* Normal ways
/* import {useState} from 'react';


import Users from './components/Users';
import NewUser from './components/NewUser';

function App() {
    const [users, setUsers] = useState([
        {id: 9101, username: 'shobuj'},
        {id: 9102, username: 'alexes'},
    ]);

    const handleNewUser = (newUser) => {
        setUsers((oldUsers) => {
            return [...oldUsers, newUser];
        });
    };

    return (
        <>
            <NewUser handleNewUser={handleNewUser} />
            <Users users={users} />
        </>
    );
}

export default App;
 */
