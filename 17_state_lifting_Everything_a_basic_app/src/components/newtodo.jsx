import {useState} from 'react';

export default function NewTodo(props) {
    const [todo, setTodo] = useState('');

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    props.passNewTodo(todo);
                }}>
                <label htmlFor="todo">New Title :</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {
                        setTodo(e.target.value);
                    }}
                />
                <button>Add Title</button>
            </form>
        </div>
    );
}
