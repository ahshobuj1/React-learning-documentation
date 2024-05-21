import Raect from 'react';
import Form from './components/form';

function App() {
    const handleValue = (values) => {
        console.log(values);
    };

    return (
        <div>
            <Form getValue={handleValue} />
        </div>
    );
}

export default App;
