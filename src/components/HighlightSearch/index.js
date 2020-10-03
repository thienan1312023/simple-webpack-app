import React from 'react';
import { SearchBar } from './SearchBar/searchBar';
import { Results } from './Results/results';

import './style.css'

const SearchText = () => {

    return (
        <>
            <div className="search-container">
                <SearchBar />
                <Results />
            </div>

        </>
    );
};

export default SearchText;