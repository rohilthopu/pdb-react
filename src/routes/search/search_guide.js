import React from 'react';
import NavBar from '../../components/nav/nav';
import Main from '../../components/search_guide/main';
import Overview from '../../components/search_guide/overview';
import Operators from '../../components/search_guide/operators';

class SearchGuide extends React.Component {
    constructor(props) {
        super(props);
        this.jumpToOverview = this.jumpToOverview.bind(this);
        this.jumpToOperators = this.jumpToOperators.bind(this);
        this.overviewSection = React.createRef();
        this.operatorsSection = React.createRef();
    }

    jumpToOverview() {
        this.overviewSection.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    jumpToOperators() {
        this.operatorsSection.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    render() {
        return (
            <div>
                <NavBar />
                <section className="hero is-dark is-fullheight">
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
                                    <li><a onClick={this.jumpToOverview}>Overview</a></li>
                                    <li><a onClick={this.jumpToOperators}>Operators</a></li>
                                    <li><a>Query Chart</a></li>
                                    <li><a>Examples</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </section>
                <div ref={this.overviewSection}>
                    <Overview />
                </div>
                <div ref={this.operatorsSection}>
                    <Operators />
                </div>
            </div>
        )
    }
}

export default SearchGuide;