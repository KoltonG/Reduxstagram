import React, { Component } from 'react';

export default class Comments extends Component {

  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment'>&times;</button>
        </p>
      </div>
    )
  }

  handleSubmit(e) {
    // Preventing default
    e.preventDefault();
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        {/* <form className='comment-form' onSubmit={this.handleSubmit}>
          <input type="text" placeholder='author'/>
          <input type="text" placeholder='comment'/>
          <input type="submit" hidden/>
        </form> */}
      </div>
    )
  }
}
