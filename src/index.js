import React from 'react'
import ReactDOM from 'react-dom'

import React from 'react'
import ReactDOM from 'react-dom'
import Page from './components/Page'
import {createStore} from 'redux'
import redutor from './reducers'
import {Provider} from 'react-redux'


ReactDOM.render( 
    <Provider store = {store}>
    <Page />,

    document.getElementById('root')

    </Provider>
    // React.createElement('h1', { className: 'heading'}, 'Ooooooi Brunaaaa'), 
    
)