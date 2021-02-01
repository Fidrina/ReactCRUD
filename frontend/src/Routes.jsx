import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../src/pages/Home/Home';
import User from '../src/pages/User/User';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={User} />

                {/** If no existing route was found */}
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;