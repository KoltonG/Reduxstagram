import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actionCreators    from '../actions/actionCreator'
import Main                   from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

/**
 * mapStateToProps will take the state and mapDispatchToProps will take in the action creators and map to all to the props to the Main component.
 * 
 * By adding the Main to the end of the invocation, we are mapping all the state and dispatch to the Main components properties (props)
 * 
 * All that your UI required is access to the State which will always be changing and the ability to call Action Creator(better known as Displatch) to dispatch an action. The reducers will then pick it up, but the reducers are not part of the requirement that the componenets need - they just need the state to know what data to show and the action creators to notify the reducers of events.
 * 
 * This will essentially surface the data and action creators to the components
 * 
 * The value of `connect` will essentially connect the store data to any level component that we need so that we don't need to keep passing down the information via props.
 * 
 */
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App;
