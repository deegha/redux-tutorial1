/**
 * Created by Deegha on 11/12/2018
 */

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

/**
 * Action Creators
*/

export const increseByOne = () => ({
  type: INCREMENT
})

export const decreseByOne = () => ({
  type: DECREMENT
})