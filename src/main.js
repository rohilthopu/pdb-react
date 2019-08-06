import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './routes/home/home';
import Search from './routes/search/search'
import SearchGuide from './routes/search/search_guide'

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/search' component={Search}/>
            <Route exact path='/search-guide' component={SearchGuide}/>
        </Switch>
    );
};

export default Main;