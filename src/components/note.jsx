import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SettingsRounded, EditCalendarRounded, CalendarMonthRounded } from "@mui/icons-material";
import { formatUpdatedDate } from '../utilities/utils.js';

const Note = ({ id, title, content, created, updated, archived }) => {
    return (
        <Link to={`/note/${id}`}
            className={`container shadow-md py-8 px-5 rounded-xl w-fit h-fit flex-col m-5 border-4 border-menu ${archived ? 'bg-menu_hover opacity-80' : 'bg-menu'} hover:shadow-2xl cursor-pointer`}>
            <div className="flex justify-between">
                <p className="text-white opacity-50 font-mono text-xs flex items-center gap-2">
                    <EditCalendarRounded fontSize="small"/> {formatUpdatedDate(updated)}
                </p>
                <SettingsRounded className="text-gray-300" fontSize="inherit"/>
            </div>
            <h2 className="noteTitle">{title || "(Untiteled Note)"}</h2>
            <p className="noteContent px-2 opacity-85">{content || "(Empty Note)"}</p>

            {/*<p className="text-white text-sm mt-8 font-medium">
                <CalendarMonthRounded fontSize="small" /> {formatUpdatedDate(created)}
            </p>*/}
        </Link>
    );
};

Note.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
    archived: PropTypes.bool
};

export default Note;
