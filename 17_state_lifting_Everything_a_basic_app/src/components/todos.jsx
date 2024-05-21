// import Todo from './todo';

export default function MapTodo(props) {
    return (
        <div>
            {props.TodoData.map((data, index) => {
                return <h1 key={index}>{data}</h1>;
                // <Todo todo={data} key={index} />;
            })}
        </div>
    );
}
