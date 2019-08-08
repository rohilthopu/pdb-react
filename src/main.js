import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Schedule from './routes/home/schedule';
import Search from './routes/search/search'
import SearchGuide from './routes/search/search_guide'

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Search}/>
            <Route exact path='/schedule' component={Schedule}/>
            <Route exact path='/search-guide' component={SearchGuide}/>
        </Switch>
    );
};

export default Main;