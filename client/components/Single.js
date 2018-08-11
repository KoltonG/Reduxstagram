import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  render() {
    // Get the post index by looking through all posts and finding the post with the matching params code.
    const postIndex = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    
    // Get the post itself
    const post = this.props.posts[postIndex];

    // Get the comments for the post
    const postComments = this.props.comments[post.code] || [];
    
    return (
      <div className='single-photo'>
        <Photo index={postIndex} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
}

export default Single;
