import {useState, useEffect} from 'react';
import './App.css';

import Countries from './components/Countries';
import Search from './components/Search';

const url = 'https://restcountries.com/v3.1/all';

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [filterCountries, setFilterCountries] = useState(countries);

    const dataFetch = async (url) => {
        setLoading(true);

        try {
            const getData = await fetch(url);
            const data = await getData.json();

            setCountries(data);
            setFilterCountries(data);
            setLoading(false);
            setError(null);
        } catch (err) {
            setLoading(false);
            setError(err);
        }
    };

    useEffect(() => {
        dataFetch(url);
    }, []);

    const handleRemoveCountry = (common) => {
        const filter = filterCountries.filter(
            (country) => country.name.common !== common
        );
        setFilterCountries(filter);
    };

    const handleSearch = (search) => {
        let searchValue = search.toLowerCase();
        const searchingValue = countries.filter((country) => {
            const newCountry = country.name.common.toLowerCase();
            return newCountry.startsWith(searchValue);
        });

        setFilterCountries(searchingValue);
    };

    return (
        <div className="app_container">
            <h1>Country App</h1>
            <Search onSearchValue={handleSearch} />
            {loading && <h3> Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            {countries && (
                <Countries
                    countries={filterCountries}
                    onRemoveCountry={handleRemoveCountry}
                />
            )}
        </div>
    );
}

export default App;
