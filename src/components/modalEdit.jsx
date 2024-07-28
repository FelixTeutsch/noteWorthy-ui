import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EditNoteRounded } from '@mui/icons-material';
import CustomAlert from './customAlert';

const ModalEdit = ({ note, showModal, setShowModal, onSave, updateNote }) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [customAlert, setCustomAlert] = useState({ show: false, type: '', title: '', message: '', floating: true });

    const resetFields = () => {
        setTitle(note.title);
        setContent(note.content);
    };

    const apiUrl = process.env.REACT_APP_API_URL;

    const handleSave = async () => {
        try {
            const response = await fetch(`${apiUrl}/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: note.id, title, content }),
            });

            if (response.ok) {
                const updatedNote = await response.json();
                setCustomAlert({
                    show: true,
                    type: 'success',
                    title: 'Success',
                    message: 'Note updated successfully!',
                    floating: true,
                });
                updateNote(updatedNote); // Update the note in the parent component
                onSave(); // Call the refresh callback
            } else if (response.status === 400) {
                setCustomAlert({
                    show: true,
                    type: 'warning',
                    title: 'Warning',
                    message: 'Invalid input. Please check your data.',
                    floating: true,
                });
            } else {
                throw new Error('An unexpected error occurred.');
            }
        } catch (error) {
            setCustomAlert({
                show: true,
                type: 'error',
                title: 'Error',
                message: 'Failed to update note. Please try again.',
                floating: true,
            });
        }

        setShowModal(false);
    };

    const handleClose = (e) => {
        if (e.target === e.currentTarget) {
            setShowModal(false);
        }
    };

    const handleCustomAlertClose = () => {
        setCustomAlert({ ...customAlert, show: false });
    };

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={handleClose}
                    >
                        <div className="container w-full px-10" onClick={(e) => e.stopPropagation()}>
                            <div className="px-10 py-5 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-background outline-none focus:outline-none">
                                <div className="my-2 flex items-start justify-between p-5 rounded-t">
                                    <div className="flex justify-center items-center">
                                        <EditNoteRounded className="text-headline opacity-75" fontSize="medium" />
                                        <input
                                            type="text"
                                            id="title"
                                            className="bg-transparent w-fit font-heading placeholder-headline text-3xl py-2 px-3 text-headline leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="Edit Note"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>
                                <textarea
                                    id="content"
                                    className="bg-menu rounded-xl w-full resize-none py-5 px-8 h-80 max-h-3/6 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Edit content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                                <div className="mt-5 flex items-center justify-end p-5 rounded-b">
                                    <button
                                        className="text-red w-32 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(false);
                                            resetFields();
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="bg-green w-32 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleSave}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {customAlert.show && (
                <CustomAlert
                    type={customAlert.type}
                    title={customAlert.title}
                    message={customAlert.message}
                    floating={customAlert.floating}
                    onClose={handleCustomAlertClose}
                />
            )}
        </>
    );
};

ModalEdit.propTypes = {
    note: PropTypes.object.isRequired,
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default ModalEdit;