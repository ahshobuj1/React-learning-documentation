import {useState} from 'react';

import {v4 as uuidv4} from 'uuid';

import Todos from './todos';
import NewTodo from './newTodo';

const Home = () => {
    const [todos, setTodos] = useState([]);

    const addNewTodo = (todo) => {
        setTodos((oldTodo) => {
            return [...oldTodo, {id: uuidv4(), todo}];
        });
    };

    const handleRemoveTodo = (id) => {
        setTodos((prevTodo) => {
            const filteredTodo = prevTodo.filter((todo) => todo.id !== id);
            return filteredTodo;
        });
    };

    return (
        <div className="container">
            <div className="child_container">
                <h1 style={{color: '#fff'}}>Todo Title</h1>

                <NewTodo addTodo={addNewTodo} />

                <Todos dummyTodo={todos} onRemoveTodo={handleRemoveTodo} />
            </div>
        </div>
    );
};
export default Home;
