import PropTypes from 'prop-types';
import {WarningRounded, ErrorRounded, CheckCircleRounded, HelpRounded, CloseRounded} from "@mui/icons-material";
import React, {useState} from "react";

const CustomAlert = ({type, title, message, floating, onClose}) => {
    const [showCustomAlert, setShowCustomAlert] = useState(true);

    let bgColor, borderColor, textColor, icon;

    switch (type) {
        case 'error':
            bgColor = 'bg-redLight';
            borderColor = 'border-red';
            textColor = 'text-red';
            icon = <ErrorRounded fontSize="large"/>;
            break;
        case 'warning':
            bgColor = 'bg-yellowLight';
            borderColor = 'border-yellow';
            textColor = 'text-yellow';
            icon = <WarningRounded fontSize="large"/>;
            break;
        case 'success':
            bgColor = 'bg-greenLight';
            borderColor = 'border-green';
            textColor = 'text-green';
            icon = <CheckCircleRounded fontSize="large"/>;
            break;
        default:
            bgColor = 'bg-gray-200';
            borderColor = 'border-gray-400';
            textColor = 'text-gray-300';
            icon = <HelpRounded fontSize="large"/>;
    }

    const handleClose = () => {
        setShowCustomAlert(false);
        if (onClose) onClose();
    };

    if (!showCustomAlert) return null;

    return (
        <>
            {floating ? (
                // Floating CustomAlert
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={handleClose}
                    >
                        <div
                            className={`flex items-center gap-5 py-5 px-8 rounded-md border-2 shadow-lg bg-menu ${borderColor} ${textColor}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='mr-3'>{icon}</div>
                            <div className="flex-1">
                                <h2 className='font-bold text-2xl'>{title}</h2>
                                <p className='opacity-75'>{message}</p>
                            </div>
                            <button onClick={handleClose}>
                                <CloseRounded/>
                            </button>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : (
                // Inline customAlert
                <div
                    className={`flex items-center gap-5 py-5 px-8 rounded-md border-2 bg-menu ${borderColor} ${textColor}`}>
                    <div className='mr-3'>{icon}</div>
                    <div className="flex-1">
                        <h2 className='font-bold text-2xl'>{title}</h2>
                        <p className='opacity-75'>{message}</p>
                    </div>
                    <button className="self-start pl-4" onClick={handleClose}>
                        <CloseRounded/>
                    </button>
                </div>
            )}
        </>
    );
};

CustomAlert.propTypes = {
    type: PropTypes.oneOf(['error', 'warning', 'success']).isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    floating: PropTypes.bool,
    onClose: PropTypes.func,
};

export default CustomAlert;
