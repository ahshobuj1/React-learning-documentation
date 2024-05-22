/* eslint-disable react/prop-types */

import {useState} from 'react';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewTodo = (props) => {
    const [todo, setTodo] = useState({title: '', desc: ''});

    const changeFunction = (event) => {
        setTodo((oldTodo) => {
            return {...oldTodo, [event.target.name]: event.target.value};
        });
    };

    const submitFunction = (event) => {
        event.preventDefault();
        props.addTodo(todo);
        setTodo({title: '', desc: ''});
    };

    return (
        <div id="form_area">
            <form action="#" onSubmit={submitFunction}>
                <label htmlFor="newTodo">Add NewTodo:</label>
                <input
                    type="text"
                    name="title"
                    value={todo.title}
                    required
                    placeholder="Title here"
                    onChange={changeFunction}
                />
                <textarea
                    name="desc"
                    id="desc"
                    value={todo.desc}
                    placeholder="Type your text here"
                    onChange={changeFunction}></textarea>

                <div>
                    <button
                        id="btn"
                        type="submit"
                        onClick={() => toast('New Note is added')}>
                        Add Note
                    </button>

                    <ToastContainer />
                </div>
            </form>
        </div>
    );
};

export default NewTodo;
