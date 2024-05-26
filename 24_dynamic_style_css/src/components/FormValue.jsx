import {useState, useEffect} from 'react';
import '../App.css';

const FormValue = () => {
    const [name, setName] = useState('');
    const [validInput, setValidInput] = useState(false);

    useEffect(() => {
        if (name.length >= 7) {
            setValidInput(true);
        } else {
            setValidInput(false);
        }
    });

    return (
        <div>
            <input
                type="name"
                required
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                style={{
                    backgroundColor: validInput ? 'green' : 'red',
                    width: '300px',
                    height: '50px',
                }}
                className={`${validInput ? 'valid_btn' : 'unValid_btn'}`}
            />
        </div>
    );
};

export default FormValue;
