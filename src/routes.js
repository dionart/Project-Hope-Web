import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/"/>
        </Switch>
    </BrowserRouter>

);

export default Routes;