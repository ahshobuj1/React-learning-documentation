import {useContext} from 'react';
import {userContext} from './parent';

const Child2 = () => {
    const {data, text} = useContext(userContext);

    return (
        <section>
            <h2>{data.name}</h2>
            <h2>{data.id}</h2>
            <h2>{text}</h2>
        </section>
    );
};

export default Child2;
