import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo' 
import Routes from './routes'
//import configureStore from './store'
// import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { HttpLink } from 'apollo-link-http'
// const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' })

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
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