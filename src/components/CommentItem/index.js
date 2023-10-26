import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentData, onClickingLike, onClickingDelete} = props
  const {id, name, comment, time, isLiked, profileColor} = commentData

  const clickLike = () => {
    onClickingLike(id)
  }

  const clickDelete = () => {
    onClickingDelete(id)
  }

  return (
    <li className="comment-list-item1">
      <div className="comment-details-container1">
        <p className={`profile-letter-para1 ${profileColor}`}>
          {name[0].toUpperCase()}
        </p>
        <div className="comment-details-container2">
          <div className="name-details-container1">
            <h1 className="name-heading1">{name}</h1>
            <p className="comment-time-para">{formatDistanceToNow(time)}</p>
          </div>
          <p className="comment-para1">{comment}</p>
        </div>
      </div>
      <div className="like-delete-button-container1">
        <button className="like-button1" type="button" onClick={clickLike}>
          <img
            className="like-liked-image1"
            src={
              isLiked
                ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
            }
            alt="like"
          />
        </button>
        <button
          className="delete-button1"
          type="button"
          onClick={clickDelete}
          data-testid="delete"
        >
          <img
            className="delete-image1"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
