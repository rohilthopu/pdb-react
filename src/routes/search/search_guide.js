import React from "react";
import NavBar from "../../components/nav/nav";
import Overview from "../../components/search_guide/overview";
import Operators from "../../components/search_guide/operators";
import Attributes from "../../components/search_guide/attributes";
import Shortcuts from "../../components/search_guide/shortcuts";
import Aliases from "../../components/search_guide/aliases";
import { HashLink as Link } from "react-router-hash-link";

class SearchGuide extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <section className="hero is-dark is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <p className="title">Search Engine Query Guide</p>
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
                                        <Link smooth to="#overview">
                                            Overview
                                        </Link>
                                    </li>
                                    <li>
                                        <Link smooth to="#operators">
                                            Operators
                                        </Link>
                                    </li>
                                    <li>
                                        <Link smooth to="#shortcuts">
                                            Shortcuts
                                        </Link>{" "}
                                    </li>
                                    <li>
                                        <Link smooth to="#aliases">
                                            Attribute Aliases
                                        </Link>
                                    </li>
                                    <li>
                                        <Link smooth to="#attributes">
                                            Object Attributes
                                        </Link>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </section>
                <div id="overview">
                    <Overview />
                </div>
                <div id="operators">
                    <Operators />
                </div>
                <div id="shortcuts">
                    <Shortcuts />
                </div>
                <div id="aliases">
                    <Aliases />
                </div>
                <div id="attributes">
                    <Attributes />
                </div>
            </div>
        );
    }
}

export default SearchGuide;
