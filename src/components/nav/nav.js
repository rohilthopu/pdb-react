import React from 'react'

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar is-dark" role="navigation">
                <div id="navbar-menu" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">
                            <span className="icon"><i className="fas fa-home"/></span>
                            <span>PAD DB</span>
                        </a>
                        <a className='navbar-item' href='/search-guide/'>Search Guide</a>
                        <a className='navbar-item' href='/api/'>REST API</a>
                        <a className='navbar-item' href='/schedule/'>Schedule</a>
                    </div>
                </div>
            </nav>
    )
    }
    }

    export default NavBar;