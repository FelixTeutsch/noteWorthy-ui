import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "../components/navbar.jsx";

const Search = props => {
    return (
        <div>
            <Navbar activeRoute={"search"}/>
        </div>
    );
};

Search.propTypes = {
    
};

export default Search;