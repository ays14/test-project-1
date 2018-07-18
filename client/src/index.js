import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './store'

const store = configureStore()

const AppContainer = function () {
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}


ReactDOM.render(<AppContainer/>, document.getElementById('app-container')) 