import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div id="navbar">
            <NavLink to="/" className="link">
                Home
            </NavLink>
            <NavLink to="/blog" className="link">
                Blog
            </NavLink>
            <NavLink to="/about" className="link">
                About
            </NavLink>
        </div>
    );
};

export default Navbar;
