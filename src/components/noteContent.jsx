import React from 'react';
import PropTypes from 'prop-types';

const NoteContent = ({note}) => {
    return (
        <div className="p-5 h-full w-full flex flex-col">
            <h2 className="noteDetailTitle">{note.title || ("(Untitled Note)")}</h2>
            <p className="noteDetailContent p-2">{note.content || "(Empty Note)"}</p>
        </div>
    );
};

NoteContent.propTypes = {
    note: PropTypes.object.isRequired
};

export default NoteContent;