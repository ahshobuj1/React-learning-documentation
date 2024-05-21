import {useState} from 'react';

import MapTodo from './todos';
import NewTodo from './newtodo';

const dummyTodos = ['title1 ', 'title2'];

export default function Home() {
    const [todos, setTodos] = useState(dummyTodos);

    return (
        <div>
            <MapTodo TodoData={todos} />
            <NewTodo passNewTodo={(newData) => setTodos([...todos, newData])} />
        </div>
    );
}
