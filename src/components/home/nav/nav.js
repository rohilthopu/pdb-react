import React from 'react'
import 'bulma/css/bulma.css'
import FontAwesomeIcon from 'react-fontawesome'
import {fas} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";

const NavBar = () => {
    return (
        <nav className="navbar is-dark" role="navigation">
            <div id="navbar-menu" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        <FontAwesomeIcon icon={['fas', 'faHome']}/>
                        <span>Pad DB</span>
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="/">
                            <span className="icon"><i className="fas fa-globe-americas"/></span>
                            <span>Data</span>
                        </a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item" href="/">
                                Monsters
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;