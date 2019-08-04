import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './routes/home/home';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/search' component={Home}/>
        </Switch>
    );
};

export default Main;