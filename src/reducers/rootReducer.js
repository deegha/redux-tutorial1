/**
 * Created by deegha on 11/12/2018
 */

import { combineReducers } from "redux"

import { counterReducer as counter } from './conuterReducer'

export const rootReducer = combineReducers({
  counter
})
