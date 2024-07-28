import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Named import
import { ArrowBackIosRounded } from "@mui/icons-material";

const NoteNavbar = ({ routeArchived }) => {
    return (
        <div className="container m-auto p-5">
            <nav className="bg-menu flex w-full m-auto p-2 rounded-full shadow-lg justify-start min-w-fit">
               <Link to={routeArchived ? "/archive" : "/"}
                      className={`navBarButton`}>
                    <ArrowBackIosRounded fontSize="large" className="pr-2"/>
                </Link>
                <h1 className="text-headline text-3xl font-bold cursor-default select-none h-full flex self-center px-5">noteWorthy</h1>
            </nav>
        </div>
    );
};

NoteNavbar.propTypes = {
    routeArchived: PropTypes.bool.isRequired
};

export default NoteNavbar;
