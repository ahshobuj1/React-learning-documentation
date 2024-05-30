import Type from './Type';
import {useState} from 'react';

const SetType = () => {
    const [name, setName] = useState('A H shobuj');
    const [subject, setSubject] = useState();
    const studentId = 2021856628;
    const cgpa = 2.56;

    const [user, setUser] = useState({
        name: 'Shobuj',
        id: 2021,
    });

    return (
        <Type
            name={name}
            subject={subject}
            studentId={studentId}
            cgpa={cgpa}
            user={user}
        />
    );
};

export default SetType;
