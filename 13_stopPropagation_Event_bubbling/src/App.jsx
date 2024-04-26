import './App.css';

function App() {
    return (
        <div onClick={(event) => console.log('parent', event)} id="parent">
            <h1>Hello stopPropagation</h1>
            <button
                onClick={(event) => {
                    console.log('Button', event);
                    event.stopPropagation(); //! Main program (stopPropagation())
                }}>
                Increase
            </button>
        </div>
    );
}

export default App;
