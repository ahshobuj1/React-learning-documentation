/* eslint-disable react/prop-types */

import {toast} from 'react-toastify';

const Todo = (props) => {
    const {title, desc} = props.todo;
    const {id} = props;

    return (
        <article id="todo_list">
            <div className="flex">
                <div>
                    <h1>{title}</h1>
                    <h4>{desc}</h4>
                </div>
                <div>
                    <button
                        className="fa fa-trash fa-1.5x"
                        onClick={() => {
                            toast('Note is Removed');
                            return props.onRemoveTodo(id);
                        }}></button>
                </div>
            </div>
        </article>
    );
};

export default Todo;
