import React from 'react'
import ReactDOM from 'react-dom'

import Page from './components/Page'
import {createStore} from 'redux'
import redutor from '../reducers'
import {Provider} from 'react-redux'

let store = createStore(redutor)
ReactDOM.render( 
    <Provider store = {store}>
    <Page/>    

    </Provider>,
    // React.createElement('h1', { className: 'heading'}, 'Ooooooi Brunaaaa'), 
    document.getElementById('root')
)