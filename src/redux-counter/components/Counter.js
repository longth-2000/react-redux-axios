import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import incrementAction from '../actions/increment'
import decrementAction from '../actions/decrement'
import { connect } from "react-redux";
class Counter extends Component {
    render() {  
        return (
            <div>
                 <p >Counter:{this.props.counter} </p> 
                <button onClick={this.props.incrementCounter}>+</button>
                <button onClick={this.props.decrementCounter}>-</button> 
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch(incrementAction()),
        decrementCounter: () => dispatch(decrementAction())
    }
}; 
export default connect(mapStateToProps,mapDispatchToProps)(Counter)