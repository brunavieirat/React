import React from 'react'
import ReactDOM from 'react-dom'

import PageContainer from './components/Page/pageContainer'
import {createStore} from 'redux'
import redutor from './reducers'
import {Provider} from 'react-redux'

let store = createStore(redutor)
ReactDOM.render( 
    <Provider store = {store}>
    <PageContainer/>    

    </Provider>,
    // React.createElement('h1', { className: 'heading'}, 'Ooooooi Brunaaaa'), 
    document.getElementById('root')
)