
import {combineReducers} from 'redux'
import ExampleReducer from './reducer_example'

const rootReducer = combineReducers({
  exampleState: ExampleReducer

})

export default rootReducer
