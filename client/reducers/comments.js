import _ from 'lodash';

/**
 * Comments reducer
 * 
 * Reducers takes in actions and perform the update to the comment state.
 * 
 * A reducer takes in two things:
 * #1: The action
 * #2: Copy of the current state
 * 
 * This reducer is only concerned about reducing the entire comment state. It is not concerned about returning sub-comment states, this is the job for a sub-reducer.
 * 
 * @param {Object} comments The given state of comments in the application, however defaulted to an empty array for when there is no state.
 * @param {Object} action Action that happened
 */
export default function comments(comments = [], action) {
  // This reducer is only concerned about affecting the complete comments state. Since the actions that this reducer must perform is only to affect a single comment, this reducer will pass the state to the sub-reducer to perform the work
  if(action.postId) {
    return {
      // Return the current state
      ...comments,
      // Overwrite the affected post with the sub-reducer
      [action.postId]: postComments(comments[action.postId], action)
    }
  }

  // Return the state(comments) if there is no postId in the action since this is required to pass the state to the sub-reducer.
  return comments;
}

/**
 * Sub-reducer to update only a single comment. This is part of the reducer decomposition. Since it is a reducer for only affecting a single comment, it will handle the adding and removal of a comment.
 * 
 * @param {String} comment Comment to be posted
 * @param {*} action Action that has been dispatched with the required data
 */
function postComments(comment = [], action) {
  // Creating a new comment array
  const newComment = _.cloneDeep(comment);
  switch(action.type) {
    case 'ADD_COMMENT': // Adding a comment to the comment state
      newComment.push({ // Adding a new comment to the comment array
        user: action.author,
        text: action.comment
      });
      return newComment; // Returning the new comment array
    case 'REMOVE_COMMENT':
      newComment.splice(action.index, 1); // Deleting the comment at the specified index
      return newComment; // Returning the new comment array
    default:
      return comment;
  }
}
