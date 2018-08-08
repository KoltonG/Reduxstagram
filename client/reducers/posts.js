import _ from 'lodash';

/**
 * Posts reducer
 * 
 * Reducers takes in actions and perform the update to the state.
 * 
 * A reducer takes in two things:
 * #1: The action
 * #2: Copy of the current state
 * 
 * @param {Object} state The given state of the application, however defaulted to an empty array for when there is no state.
 * @param {Object} action Action that happened
 * 
 * TODO: How does this reducer get the state date from it's parent? -> It get's the posts state when this file has the same name as the state that it's going to update. The file include flow is that this file is included in the rootReducer and then that is included in the store.js file when creating the store. The state to reducer matching is done there.
 * 
 * There is an import concept here that there reducer functions must be "pure function" which means it predictable. Given the same input multiple times, the same output will return. In this case, we need to take a copy of the state and return a new version, never actully modifying th current state.
 * 
 * The state is really posts, since when combining the reducers, we are exsplicitly mapping a the store key to the reducer name.
 */
function posts(posts = [], action) {
  // Since this reducer is being called each time an dispatch (action being fired), we need to use a switch statement to catch the actions that we are interested in action upon.
  switch(action.type) {
    case 'INCREMENT_LIKES': // This is the action that we want to act upon
      console.log('Incrementing Likes'); // FIXME: Remove this
      const index = action.index; // Index variable of post sent from the action creator

      // Creating a clone of the current posts state to update it
      const newPosts = _.cloneDeep(posts);
      newPosts[index].likes++; // Updating the post likes
      
      return newPosts;
    default: // If there are no matches, return the default state
      return posts;
  }
}

export default posts
