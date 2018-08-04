import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import Home from '../components/Home'

const Routes = () => {
    return(
        <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={LoginForm}/>
            <Route exact path="/signup" component={SignupForm}/>
        </Switch>
        </Router>
    )
}

export default Routes

                                                                
