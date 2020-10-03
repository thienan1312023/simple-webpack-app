import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import './styles.scss';
export function ResultItem({ content, color }) {
    return (<div className="search-item"> {content && parse(content)}</div>)
}


ResultItem.defaultProps = {
    content: '',
    color: '#3466EF'
};

ResultItem.propTypes = {
    content: PropTypes.string.isRequired,
    color: PropTypes.string
};