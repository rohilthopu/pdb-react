import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './routes/home/home';
import Search from './routes/search/search'

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/search' component={Search}/>
        </Switch>
    );
};

export default Main;