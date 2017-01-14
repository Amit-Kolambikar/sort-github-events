import { combineReducers } from 'redux'
import fillEvents from './fillEvents'
import filterDates from './filterDates'

const MainApp = combineReducers({
  fillEvents,
  filterDates
})

export default MainApp
