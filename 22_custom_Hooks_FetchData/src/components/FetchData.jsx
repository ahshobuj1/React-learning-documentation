import useFetch from '../CustomHooks/useFetch';

const DataFetch = () => {
    const {data, loading, error} = useFetch(
        'https://jsonplaceholder.typicode.com/todos'
    );

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
