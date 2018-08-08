import { createStore }          from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory }       from 'react-router';

// Import the root reducer
import rootReducer from './reducers/index';

// Importing mock data
import posts    from './data/posts';
import comments from './data/comments';

// Create an object to store the the mock data together
// NOTE: There is a reducer per state object. In this case we will have one for posts and one for comments. Then there is a root reducer that includes all reducers and the state.
const defaultState = {
    posts,
    comments
};

// To create a store, you need a rootReducer and a defaultState.
// Note that the rootReducer at this point has two reducers called 'posts' and 'comments' which match up exactly with the defaultState keys. This is critical to pass the correct state information to the right reducer.
// Initializing the Redux store
const store = createStore(rootReducer, defaultState);

// Creating the history object that will hold both the browser history and the store
const history = syncHistoryWithStore(browserHistory, store);

// Exporting history
// Note that anything other than default exports requires a variable decleration so the imports can import only certain modules
export {history as history}

// Exporting store
export default store;
