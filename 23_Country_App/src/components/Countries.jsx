/* eslint-disable react/prop-types */
import {v4 as uuidv4} from 'uuid';

import Country from './Country';
import '../App.css';

const Countries = (props) => {
    return (
        <div className="countries_container">
            {props.countries.map((country) => {
                const id = uuidv4();

                return (
                    <Country
                        country={country}
                        key={id}
                        id={id}
                        onRemoveCountry={props.onRemoveCountry}
                    />
                );
            })}
        </div>
    );
};

export default Countries;
