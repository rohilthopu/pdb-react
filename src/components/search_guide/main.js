import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div>
                <section className="hero is-dark is-fullheight" ref={this.topSection}>
                    <div className="hero-body">
                        <div className="container">
                            <p className="title">
                                Search Engine Query Guide
                            </p>
                            <p className="subtitle">
                                Click on an item on the right to jump to its section.
                            </p>
                        </div>
                        <div className="container">
                            <aside className="menu is-large">
                                <p className="menu-label">
                                    SECTIONS
                                </p>
                                <ul className="menu-list">
                                    <li><a>Overview</a></li>
                                    <li><a>Query Chart</a></li>
                                    <li><a>Examples</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Main;