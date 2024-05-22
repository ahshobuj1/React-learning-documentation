import {useEffect, useState} from 'react';

const DataFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((todo) => {
                    if (!todo.ok) {
                        throw Error('data response is not successful...');
                    }
                    return todo.json();
                })
                .then((todo) => {
                    setData(todo);
                    setLoading(false);
                    setError(null);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        }, 2000);
    }, []);

    const mappingData =
        data &&
        data.map((data) => {
            return (
                <h2 key={data.id}>
                    {data.id}- {data.title}
                </h2>
            );
        });

    const loadingMessage = loading && <h3>Data is loading...</h3>;

    return (
        <div>
            <h1> FetchingData </h1>
            {error && <h3>{error}</h3>}
            {loadingMessage}
            {mappingData}
        </div>
    );
};

export default DataFetch;
