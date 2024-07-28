import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NoteInfo from './noteInfo';
import NoteContent from './noteContent';
import CustomAlert from './customAlert';
import ModalEdit from './modalEdit';
import { EditNoteRounded } from '@mui/icons-material';

const NoteDetail = ({ note, onArchive, onUnarchive, onDelete, updateNote }) => {    const [showModal, setShowModal] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh((prev) => !prev);
    };

    return (
        <div className="container m-auto w-full px-10 py-5 flex flex-col justify-center items-center">
            <div className="noteDetail max-w-full">
                <NoteInfo
                    note={note}
                    onArchive={onArchive}
                    onUnarchive={onUnarchive}
                    onDelete={onDelete}
                />
                <hr className="border-menu border-2 w-full mt-5 opacity-50" />
                <NoteContent note={note} />
                <hr className="border-menu border-2 w-full mt-5 opacity-50" />
                <div className="w-full flex justify-end items-center p-5">
                    <button
                        className="bg-headline px-8 py-2 rounded-full flex items-center gap-4 text-background text-m opacity-80 fontWeight-bold transition-all hover:scale-110 active:scale-95 active:opacity-60"
                        onClick={() => setShowModal(true)}
                    >
                        <EditNoteRounded fontSize="medium" />
                        Edit
                    </button>
                </div>
            </div>
            <ModalEdit note={note} showModal={showModal} setShowModal={setShowModal} onSave={handleRefresh} updateNote={updateNote} />
        </div>
    );
};

NoteDetail.propTypes = {
    note: PropTypes.object.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;