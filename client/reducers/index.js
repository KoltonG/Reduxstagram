/**
 * Root Reducer
 * Only once reducer can be included in Redux so creating a root reducer and including all the reducers is the only way to do so. This is what we are doing in this file, we are including the posts and comments reducers and merging them with the state.
 */
import { combinedReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

/**
 * There are three things that will live in our state, the post, the comment and the route changes.
 */
const rootReducer = combinedReducers({posts, comments, router: routerReducer})

export default rootReducer;
