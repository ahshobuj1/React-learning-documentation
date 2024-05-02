const Child = (props) => {
    const dataChild = 'pass data from Child';

    const {data, onChildData} = props;
    return (
        <div>
            <h1>{data}</h1>
            <h2>{onChildData(dataChild)}</h2>
        </div>
    );
};

export default Child;
