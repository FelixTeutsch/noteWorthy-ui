import React from 'react';
import PropTypes from 'prop-types';
import NoteNavbar from '../components/noteNavbar';

const PageNotFound = props => {
    return (
        <>
            <NoteNavbar routeArchived={false} />
            <div className="flex flex-col items-center justify-center pt-40 text-white select-none opacity-80">
                <h1 className="text-9xl font-bold border-b">404</h1>
                <p className="text-4xl mt-4">Page Not Found</p>
            </div>
        </>
    );
};

PageNotFound.propTypes = {
    
};

export default PageNotFound;