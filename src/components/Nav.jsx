import { NavLink } from 'react-router-dom';

const Nav = ({ handleShowHideNav }) => {

    const closeNav = (e) => {
        if( window.innerWidth < 600){
            handleShowHideNav();
        } else {
            e.target.blur();
        }


    }

    return (
        <nav className="main-nav" onClick={closeNav}>
            <ul>
                <li><NavLink to="/" >Movies</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/favourite">Favourites</NavLink></li>

            </ul>
        </nav>
    );

};

export default Nav;
