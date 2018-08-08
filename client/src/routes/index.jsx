import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import Home from '../components/Home'

// async function isAuthenticated(){
//     let token
//     token = await localStorage.getItem('token')
//     console.log(token)
//     if (token === null)
//     return false
//     else 
//     return true
// }


// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={ (props)=>(
//         auth ? <Component {...props}/> : <Redirect to="/login"/>
//     )} />
// )

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props)=>(
        localStorage.getItem('token') ? (< Component {...props}/>) : 
            <Redirect to ="/login"/>    
    )}/>
)

const Routes = () => {
    return(
        <Router>
        <Switch>
            <PrivateRoute exact path="/" component={Home}/>
            <Route exact path="/login" component={LoginForm}/>
            <Route exact path="/signup" component={SignupForm}/>
        </Switch>
        </Router>
    )
}

export default Routes

                                                                
