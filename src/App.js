/**
 * Created by deegha on 11/12/2018
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'

import { increseByOne, decreseByOne } from './actions/couterActions' 
import { Header,Counter } from './components'

class App extends Component {

  increment =  () => this.props.increment() 

  decrement = () => this.props.decrement()

  render() {

    const { counter: { count } } = this.props  
  
    return (
     <div className='container'>
        <Header />
        <div className='innerContainer'>
          <Counter 
            increment={ this.increment } 
            decrement={this.decrement} 
            counter={count} />
        </div>
     </div>
    )
  }
}

const mapStateToProps = ({counter}) => ({
  counter
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increseByOne()),
  decrement: () =>  dispatch(decreseByOne())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
