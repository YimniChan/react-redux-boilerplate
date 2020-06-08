import { connect } from 'react-redux' 
//import { INCREMENT,INCREMENT5, DECREMENT, CLEAR } from '../actions' 
import { INCREMENT, increment, DECREMENT, CLEAR } from '../actions' 
import Counter from './Counter'

const mapStateToProps = (state, ownProps) => { 
     return {
         value: state.value  }; };

const mapDispatchToProps = (dispatch, ownProps) => {
    return {    
        // onIncrement: () => {
        //  dispatch({ type: INCREMENT })
        // }, 
        onIncrement: (value) => {
            dispatch(increment(value))
        }, 
        // onIncrement5: () => {
        // dispatch({ type: INCREMENT5 })
        // }, 
        onDecrement: () => {     
        dispatch({ type: DECREMENT })
        } ,
        onClear: () => {     
        dispatch({ type: CLEAR })
        } 
        //cleanr
    } 
}
const CounterApp = connect(
      mapStateToProps,
    mapDispatchToProps 
    )(Counter)

export default CounterApp;


