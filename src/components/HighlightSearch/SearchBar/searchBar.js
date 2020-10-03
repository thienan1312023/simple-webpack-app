import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getSearchData } from "../../../actions";
import './styles.scss';
import _ from "lodash";

export const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const sendQuery = query => console.log(`Querying for ${query}`);
    const delayedQuery = useCallback(_.debounce(q => sendQuery(q), 500), []);

    useEffect(() => {
        dispatch(getSearchData(searchValue));
    }, [searchValue, dispatch])
    const handleOnChangeInput = (e) => {
        setSearchValue(e.target.value);
        delayedQuery(e.target.value);
    }
    return (
        <div className="search-bar">
            <div className="search">
                <input type="text" className="searchTerm" value={searchValue} onChange={(e) => handleOnChangeInput(e)} placeholder="What are you looking for?" />
            </div>
        </div>
    );
};