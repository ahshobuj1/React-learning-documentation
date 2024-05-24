/* eslint-disable react/prop-types */

import style from './country.module.css';

const Country = (props) => {
    const {name, flags, population, area, capital, region} = props.country;

    return (
        <section className={style.contries_card}>
            <div className={style.img}>
                <img src={flags.png} alt={name.common} />
            </div>
            <h1>Name : {name.official}</h1>
            <h4>Capital : {capital}</h4>
            <h4>Region : {region}</h4>
            <h4>Population : {population}</h4>
            <h4>Area : {area}</h4>

            <button
                className={style.btn}
                onClick={() => props.onRemoveCountry(name.common)}>
                Remove Country <i className="fa fa-trash"></i>
            </button>
        </section>
    );
};

export default Country;
