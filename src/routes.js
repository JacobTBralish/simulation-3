import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Auth from './Component/Auth/Auth'
import Dashboard from './Component/Dashboard/Dashboard'
import Post from './Component/Post/Post'
import Form from './Component/Form/Form'



export default (
    <Switch>
        <Route exact to='/' component={Auth}>Login</Route>
        <Route to='/dashboard' component={Dashboard}>Dashboard</Route>
        <Route to='/post/:postid' component={Post}>Post</Route>
        <Route to='/new' component={Form}>Form</Route>
    </Switch>
)