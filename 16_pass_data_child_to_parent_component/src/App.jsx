import './App.css';

import Child from './component/child';

function App() {
    const data = 'this is data from parent (App)';

    const childData = (data) => {
        return data;
    };

    return (
        <div>
            <h1>hello</h1>
            <Child data={data} onChildData={childData} />
        </div>
    );
}

export default App;
