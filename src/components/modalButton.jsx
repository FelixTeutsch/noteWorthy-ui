import React from 'react';
import { AddRounded } from "@mui/icons-material";
import PropTypes from 'prop-types';

const ModalButton = ({ setShowModal }) => {
    return (
        <div
            className="p-4 w-fit bg-headline rounded-full cursor-pointer addButton absolute bottom-10 right-10"
            onClick={() => setShowModal(true)}
        >
            <AddRounded className="text-menu" fontSize="large"/>
        </div>
    );
};

ModalButton.propTypes = {
    setShowModal: PropTypes.func.isRequired,
};

export default ModalButton;
