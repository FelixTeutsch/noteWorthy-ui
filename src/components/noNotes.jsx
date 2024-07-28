import React from 'react';
import PropTypes from 'prop-types';
import { EditNoteRounded } from "@mui/icons-material";

const NoNotes = ({ activeRoute }) => {
    return (
        <div className="container w-full m-auto">
            <div className="flex flex-col items-center justify-center pt-40 text-white opacity-50 select-none">
                {activeRoute === 'archive' ? (
                    <>
                        <h1 className="text-9xl font-bold">📂</h1>
                        <p className="text-2xl mt-4">No notes archived.</p>
                        <p className="text-2xl">Good job?</p>
                    </>
                ) : (
                    <>
                        <h1 className="text-9xl font-bold">📝</h1>
                        <p className="text-2xl mt-4">No notes found.</p>
                        <p className="text-2xl">Create one now!</p>
                    </>
                )}
            </div>
        </div>
    );
};

NoNotes.propTypes = {
    activeRoute: PropTypes.string.isRequired,
};

export default NoNotes;