/*
Renders the application to div id 'app'.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import Page from './containers/Page'

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Page />
  </Provider>
  , document.getElementById('app')
)
