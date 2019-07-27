import React from 'react'
import 'bulma/css/bulma.css'

const NavBar = () => {
    return (
        <nav className="navbar is-dark" role="navigation">
            <div id="navbar-menu" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        <span className="icon"><i className="fas fa-home"/></span>
                        <span>PAD DB</span>
                    </a>
                    {/*<div className="navbar-item has-dropdown is-hoverable">*/}
                    {/*    <a className="navbar-link" href="/">*/}
                    {/*        <span className="icon"><i className="fas fa-globe-americas"/></span>*/}
                    {/*        <span>Data</span>*/}
                    {/*    </a>*/}
                    {/*    <div className="navbar-dropdown">*/}
                    {/*        <a className="navbar-item" href="/">*/}
                    {/*            Monsters*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </nav>
    )
};

export default NavBar;