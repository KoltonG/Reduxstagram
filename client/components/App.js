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
 * mapStateToProps will take in the state, which is the posts and comments and the mapDispatchToProps will take in the action creators and will suffice all this via props.
 * 
 * This will essentially surface the data and action creators to the components
 * 
 * By adding the Main to the end of the invocation, we are mapping all the state and dispatch to the Main components properties (props)
 * 
 * Connect will essentially connect the store data to any level component that we need so that we don't need to keep passing down the information via props.
 */
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App;
