/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';

import style from './search.module.css';

const Search = (props) => {
    const [searchData, setSearchData] = useState('');

    useEffect(() => {
        props.onSearchValue(searchData);
    }, [searchData]);

    return (
        <div className={style.search}>
            <input
                type="text"
                placeholder="Search Country..."
                onChange={(e) => {
                    setSearchData(e.target.value);
                }}
            />
        </div>
    );
};

export default Search;
