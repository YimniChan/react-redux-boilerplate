import { connect } from 'react-redux' 
import { INCREMENT,INCREMENTByFIVE, DECREMENT, CLEAR } from '../actions' 
//import { INCREMENT, increment, DECREMENT, CLEAR } from '../actions' 
import Counter from './Counter'

const mapStateToProps = (state, ownProps) => { 
     return {
         value: state.value  }; };

const mapDispatchToProps = (dispatch, ownProps) => {
    return {    
        onIncrement: () => {
         dispatch({ type: INCREMENT })
        }, 
        // onIncrement: (value) => {
        //     dispatch(increment(value))
        // }, 
        onIncrementByFive: () => {
        dispatch({ type: INCREMENTByFIVE })
        }, 
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


