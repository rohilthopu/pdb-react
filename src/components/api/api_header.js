import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class APIHeader extends Component {
    render() {
        return (
            <div>
                <section className="hero is-dark is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <p className="title">Public REST API Endpoints</p>
                            <p className="subtitle">
                                Click on an item on the right to jump to its
                                section.
                            </p>
                        </div>
                        <div className="container">
                            <aside className="menu is-large">
                                <p className="menu-label">SECTIONS</p>
                                <ul className="menu-list">
                                    <li>
                                        <Link smooth to="#monsters">
                                            Monsters
                                        </Link>
                                    </li>
                                    <li>
                                        <Link smooth to="#skills">
                                            Skills
                                        </Link>
                                    </li>
                                    <li>
                                        <Link smooth to="#dungeons">
                                            Dungeons
                                        </Link>{" "}
                                    </li>
                                    <li>
                                        <Link smooth to="#floors">
                                            Floors
                                        </Link>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
