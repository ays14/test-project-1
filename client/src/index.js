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
// import { HttpLink } from 'apollo-link-http'
// const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' })

const httpLink = new HttpLink({
    uri: "http://localhost:5000/graphql"
})
const cache = new InMemoryCache()

const authMiddleware = new ApolloLink((operation,forward)=>{
    operation.setContext({
        headers: { authorization: ''
        }   
    })
    return forward(operation)
})
const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache
})

// const reducers = combineReducers({
//     apollo: client.reducer()
// })

// const store = createStore({
//     reducers,
//     {}, //initial state,
//     compose(
//         applyMiddleware(client.middlware()),
//         (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
//     )
// })

const AppContainer = function () {
    return(
        <ApolloProvider client={client}>
            <Routes/>
        </ApolloProvider>
    )
}


ReactDOM.render(<AppContainer/>, document.getElementById('root')) 