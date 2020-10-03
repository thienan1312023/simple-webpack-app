import React from "react";
import { useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import _ from 'lodash';
import { ResultItem } from "../ResultItem";
import './styles.scss';


export const Results = () => {
    const results = useSelector(state => state.searchResults);
    const loading = useSelector(state => state.loading);
    return (
        <div className="search-results-container">
            <BeatLoader
                size={15}
                margin={2}
                color={"#3ED297"}
                loading={loading}
            />
            {results && results.length > 0 && results.map((part, index) => {
                const value = _.get(part, '_highlightResult.title.value');
                return value && part._highlightResult.title && part._highlightResult.title.matchLevel !== 'none' && (
                    <ResultItem key={index} content={value} />
                );
            })}
        </div>
    );
};