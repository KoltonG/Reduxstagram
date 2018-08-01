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
 */
function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts
