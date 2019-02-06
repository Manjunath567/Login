import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Home from './Component/Home/Home';
import Register from './Component/Register/Register';
import Forgot from './Component/Forgot/Forgot';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot" component={Forgot} />
               
    </Switch>
)

export default Routes;