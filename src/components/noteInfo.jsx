import React from 'react';
import PropTypes from 'prop-types';
import { formatUpdatedDate } from '../utilities/utils.js';
import { EditCalendarRounded, CalendarMonthRounded, ArchiveRounded, DeleteRounded, UnarchiveRounded, FingerprintRounded } from '@mui/icons-material';

const NoteInfo = ({ note, onArchive, onUnarchive, onDelete }) => {
    return (
        <div className="flex gap-6 max-w-fill w-fit transition-all">
            <div className="flex gap-2 bg-menu py-4 px-10 rounded-full transition-all">
                {!note.archived ?
                    <button
                        onClick={onArchive}
                        className="flex rounded-full bg-yellow text-menu text-xs flex items-center gap-2 px-4 py-1 transition-all hover:opacity-90 hover:scale-110 active:scale-95  active:opacity-40">
                        <ArchiveRounded fontSize="small" />
                        Archive
                    </button>
                    :
                    <button
                        onClick={onUnarchive}
                        className="flex rounded-full bg-green text-menu text-xs flex items-center gap-2 px-4 py-1 transition-all hover:opacity-90 hover:scale-110 active:scale-95  active:opacity-40">
                        <UnarchiveRounded fontSize="small" />
                        Unarchive
                    </button>
                }
                <button
                    onClick={onDelete}
                    className="flex rounded-full text-red text-xs flex items-center gap-2 px-4 py-1 hover:opacity-75 transition-all hover:scale-110 active:scale-95  active:opacity-40">
                    <DeleteRounded fontSize="small" />
                    Delete
                </button>
            </div>
            <p className="text-white opacity-50 font-mono text-xs flex items-center gap-2">
                <EditCalendarRounded fontSize="small" /> {formatUpdatedDate(note.updated)}
            </p>
            <p className="text-white opacity-50 font-mono text-xs flex items-center gap-2">
                <CalendarMonthRounded fontSize="small" /> {formatUpdatedDate(note.created)}
            </p>
            {note.archived &&
                <p className="text-white opacity-50 font-mono text-xs flex items-center gap-2">
                    <ArchiveRounded fontSize="small" /> archived
                </p>
            }
            <p className="text-white opacity-50 font-mono text-xs flex items-center gap-2">
                <FingerprintRounded fontSize="small" /> {note.id}
            </p>
        </div>
    );
};

NoteInfo.propTypes = {
    note: PropTypes.object.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteInfo;
