/* eslint-disable react/prop-types */

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
                        onClick={() => props.onRemoveTodo(id)}
                        className="fa fa-trash fa-1.5x"></button>
                </div>
            </div>
        </article>
    );
};

export default Todo;
