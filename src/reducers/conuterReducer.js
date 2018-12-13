/**
 * Created by deegha on 11/12/2018
 */

import { INCREMENT, DECREMENT } from '../actions/couterActions'

const initialState = {
  count: 1
}

export const counterReducer = (state=initialState, action) => {

  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count+1
      }
    case DECREMENT: {
      return {
        count: state.count-1
      }
    }
    default: 
      return state
  }
} 