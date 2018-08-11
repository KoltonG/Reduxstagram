import React, { Component } from 'react';

export default class Comments extends Component {

  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment' onClick={this.props.removeComment.bind(null, this.props.params.postId, index)}>&times;</button>
        </p>
      </div>
    )
  }

  /**
   * Function to handle the comment form submittion. This will gather the required information like postId, author name and the comment and displatch an action to the reducer.
   */
  handleSubmit(e) {
    e.preventDefault(); // Preventing default
    
    // Gathering information for creating a comment
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    // Dispatching an event to the reducer
    this.props.addComment(postId, author, comment);

    // Clearing the comment input content since we want to keep the author for this session.
    this.refs.comment.value = '';
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment.bind(this))}
        <form className='comment-form' onSubmit={this.handleSubmit.bind(this)} ref='commentForm'>
          <input type="text" placeholder='author' ref='author' required/>
          <input type="text" placeholder='comment' ref='comment' required/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
}
