/* eslint-disable react/prop-types */

import Todo from './todo';

const Todos = (props) => {
    return (
        <section id="section">
            {props.dummyTodo.map((todo) => (
                <Todo
                    todo={todo.todo}
                    key={todo.id}
                    id={todo.id}
                    onRemoveTodo={props.onRemoveTodo}
                />
            ))}
        </section>
    );
};

export default Todos;
