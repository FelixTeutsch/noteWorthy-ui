import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/navbar';
import NotesArea from '../components/notesArea';
import Modal from '../components/modal';
import ModalButton from '../components/modalButton';

const Notes = ({ activeRoute }) => {
    const [showModal, setShowModal] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh((prev) => !prev);
    };

    return (
        <>
            <Navbar activeRoute={activeRoute} />
            <NotesArea activeRoute={activeRoute} refresh={refresh} />
            <Modal showModal={showModal} setShowModal={setShowModal} onSave={handleRefresh} />
            <ModalButton setShowModal={setShowModal} />
        </>
    );
};

Notes.propTypes = {
    activeRoute: PropTypes.string.isRequired,
};

export default Notes;