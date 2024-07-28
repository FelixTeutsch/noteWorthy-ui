import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Named import
import { ArchiveRounded, EditRounded, SearchRounded } from "@mui/icons-material";

const Navbar = ({ activeRoute }) => {
    return (
        <div className="container m-auto p-5">
            <nav className="bg-menu flex w-full m-auto p-2 rounded-full shadow-lg justify-between min-w-fit">
                <h1 className="text-headline text-3xl font-bold cursor-default select-none h-full flex self-center px-5">noteWorthy</h1>
                <ul className="flex items-center space-x-1">
                    <li>
                        <Link to="/"
                              className={`navBarButton ${activeRoute === 'notes' || typeof activeRoute === "undefined" ? 'bg-menu_active' : ''}`}>
                            <EditRounded fontSize="large" className="pr-2"/>
                            notes
                        </Link>
                    </li>
                    <li>
                        <Link to="/archive"
                              className={`navBarButton ${activeRoute === 'archive' ? 'bg-menu_active' : ''}`}>
                            <ArchiveRounded fontSize="large" className="pr-2"/>
                            archive
                        </Link>
                    </li>
                    {/*<li>
                        <Link to="/search" aria-label="Search"
                              className={`navBarButton search px-2 ${activeRoute === 'search' ? 'bg-menu_active' : ''}`}>
                            <SearchRounded fontSize="large"/>
                        </Link>
                    </li>*/}
                </ul>
            </nav>
        </div>
    );
};

Navbar.propTypes = {
    activeRoute: PropTypes.string
};

export default Navbar;
