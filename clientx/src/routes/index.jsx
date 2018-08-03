import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

const Routes = () => {
    return(
        <Router>
        <Switch>
            <Route exact path="/login" component={LoginForm}/>
        </Switch>
        </Router>
    )
}

export default Routes

                                                                
