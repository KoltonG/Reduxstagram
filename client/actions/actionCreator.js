/**
 * Actions creators for Redux. This will store all the possible actions that can be performed on our application. These create the actions and what is returned will be what is being dispatched to Redux.
 * 
 * This is the only way that information can be sent to reducers to be placed in the store.
 */

/**
 * Increment likes on a post action creator.
 * @param {Number} index Current number of likes
 */
export function incrementLikes(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

/**
 * Add comment to post action creator
 * @param {String} postId Identifer of the post
 * @param {String} author Author of the comment
 * @param {String} comment Content of the comment
 */
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

/**
 * Remove a comment on a post action creator
 * @param {*} postId Identifer of the post
 * @param {*} index Index of the comment to be deleted
 */
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}


