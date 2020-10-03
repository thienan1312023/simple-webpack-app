import React from 'react';
import { SearchBar } from './SearchBar/searchBar';
import { Results } from './Results/results';

import './style.css'

const SearchText = () => {

    return (
        <>
            <SearchBar />
            <Results />
        </>
    );
};

export default SearchText;