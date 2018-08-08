import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient }from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink, concat } from 'apollo-link'
import { ApolloProvider } from 'react-apollo' 
import { InMemoryCache } from 'apollo-cache-inmemory' 
import Routes from './routes'
import 'semantic-ui-css/semantic.min.css';
//import configureStore from './store'
// import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'

// import ApolloClient from 'apollo-boost'
// const client = new ApolloClient({
//     uri: 'http://localhost:5000/graphql'
// })

const httpLink = new HttpLink({
    uri: "http://localhost:5000/graphql"
})
const cache = new InMemoryCache()

const authMiddleware = new ApolloLink((operation,forward)=>{
    operation.setContext({
        headers: { authorization: localStorage.getItem('token') ? localStorage.getItem('token') : ''
        }   
    })
    return forward(operation)
})
const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache
})

const AppContainer = function () {
    return(
        <ApolloProvider client={client}>
            <Routes/>
        </ApolloProvider>
    )
}


ReactDOM.render(<AppContainer/>, document.getElementById('root')) 