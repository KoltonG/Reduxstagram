import React              from 'react';
import { Link }           from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

/**
 * Photo component nested within the PhotoGrip component
 */
class Photo extends React.Component {
  render() {
    // Creating const to simplify referencing to props
    const { post, comments, index } = this.props;

    // Component return
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          {/* Image header */}
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className='grid-photo'/>
          </Link>

          {/* Heart animation when liking the image */}
          <CSSTransitionGroup transitionName='like' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={post.likes} className='likes-heart'>
              {post.likes}
            </span>
          </CSSTransitionGroup>

          {/* Content, like and comment section below the image header*/}
          <figcaption>
            <p>{post.caption}</p>
            <div className="control-buttons">
              <button className="likes" onClick={this.props.incrementLikes.bind(null, index)}>&hearts; {post.likes}</button>
              <Link className='button' to={`/view/${post.code}`}>
                <span className="comment-count">
                  <span className="speech-bubble"></span>
                  {comments[post.code] ? comments[post.code].length : 0}
                </span>
              </Link>
            </div>
          </figcaption>

        </div>
      </figure>
    )
  }
}

export default Photo;
