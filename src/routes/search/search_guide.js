import React from 'react';
import NavBar from '../../components/nav/nav';
import Overview from '../../components/search_guide/overview';
import Operators from '../../components/search_guide/operators';
import Attributes from '../../components/search_guide/attributes';
import Shortcuts from '../../components/search_guide/shortcuts';
import Aliases from '../../components/search_guide/aliases';

class SearchGuide extends React.Component {
    constructor(props) {
        super(props);
        this.jumpToOverview = this.jumpToOverview.bind(this);
        this.jumpToOperators = this.jumpToOperators.bind(this);
        this.jumpToCategories = this.jumpToCategories.bind(this);
        this.jumpToShortcuts = this.jumpToShortcuts.bind(this);
        this.jumpToAliases = this.jumpToAliases.bind(this);
        this.overviewSection = React.createRef();
        this.operatorsSection = React.createRef();
        this.categoriesSection = React.createRef();
        this.shortcutsSection = React.createRef();
        this.aliasesSection = React.createRef()
;    }

    jumpToOverview() {
        this.overviewSection.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    jumpToOperators() {
        this.operatorsSection.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    jumpToCategories() {
        this.categoriesSection.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    jumpToShortcuts() {
        this.shortcutsSection.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    jumpToAliases() {
        this.aliasesSection.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    render() {
        return (
            <div>
                <NavBar/>
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
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><a onClick={this.jumpToOverview}>Overview</a></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><a onClick={this.jumpToOperators}>Operators</a></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><a onClick={this.jumpToShortcuts}>Shortcuts</a></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><a onClick={this.jumpToAliases}>Query Aliases</a></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><a onClick={this.jumpToCategories}>Query Attributes</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </section>
                <div ref={this.overviewSection}>
                    <Overview/>
                </div>
                <div ref={this.operatorsSection}>
                    <Operators/>
                </div>
                <div ref={this.shortcutsSection}>
                    <Shortcuts/>
                </div>
                <div ref={this.aliasesSection}>
                    <Aliases/>
                </div>
                <div ref={this.categoriesSection}>
                    <Attributes/>
                </div>
            </div>
        )
    }
}

export default SearchGuide;