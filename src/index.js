import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Home from './Home';
import Create from './Create'
import Forgot from './Forgot'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
    (    
        <BrowserRouter>
            <Route path="/" exact={true} component={App} />
            <Route path="/home" component = {Home} />
            <Route path="/login" component = {Login} />
            <Route path="/forgot" component = {Forgot}/>
            <Route path="/create" component = {Create}/>
        </BrowserRouter>
    ), 
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//<App/>