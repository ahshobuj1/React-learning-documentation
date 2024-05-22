import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
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
    }, [url]);

    return {data, loading, error};
};

export default useFetch;
