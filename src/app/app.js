/*
Renders the application to div id 'app'.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import Wrapper from './containers/Wrapper'

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Wrapper />
  </Provider>
  , document.querySelector('.app-wrapper')
)
