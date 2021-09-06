import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/home';
import Profile from './pages/profile';
import Repos from './pages/repos';

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/profile" exact component={ Profile } />
            <Route path="/repos" exact component={ Repos } />
        </Switch>
    </BRouter>
);

export default Routes;