import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/home'
import Example from './components/example'

const route = (
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/example/:id" component={Example}/>
    </Router>
)

export default route