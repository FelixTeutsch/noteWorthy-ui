import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EditRounded } from '@mui/icons-material';
import CustomAlert from './customAlert';

const Modal = ({ showModal, setShowModal, onSave }) => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [customAlert, setCustomAlert] = useState({ show: false, type: '', title: '', message: '', floating: true });
    const charCount = note.length;

    const resetFields = () => {
        setTitle('');
        setNote('');
    };

    const apiUrl = process.env.REACT_APP_API_URL;

    const handleSave = async () => {
        try {
            const response = await fetch(`${apiUrl}/save`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content: note }),
            });

            if (response.ok) {
                setCustomAlert({
                    show: true,
                    type: 'success',
                    title: 'Success',
                    message: 'Note saved successfully!',
                    floating: true,
                });
                resetFields();
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
                message: 'Failed to save note. Please try again.',
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
                                        <EditRounded className="text-headline opacity-75" fontSize="medium" />
                                        <input
                                            type="text"
                                            id="title"
                                            className="bg-transparent w-fit font-heading placeholder-headline text-3xl py-2 px-3 text-headline leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="New Note"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            maxLength={100}
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
                                    id="note"
                                    className="bg-menu rounded-xl w-full resize-none py-5 px-8 h-80 max-h-3/6 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter note"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    maxLength={1000}
                                    minLength={1}
                                />
                                <div className="text-gray-200 font-heading flex justify-end items-baseline py-2 pr-5 opacity-50">
                                    {charCount}
                                    <span className="pl-1 opacity-40 text-xs">/ 1000</span>
                                </div>
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

Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default Modal;