import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], nameInput: '', commentInput: ''}

  onNameEntry = event => {
    this.setState({nameInput: event.target.value})
  }

  onCommentEntry = event => {
    this.setState({commentInput: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    console.log('comment adding...')
    const {nameInput, commentInput} = this.state
    const colorId =
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ]
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      time: new Date(),
      isLiked: false,
      profileColor: colorId,
    }
    if (nameInput !== '' && commentInput !== '') {
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        nameInput: '',
        commentInput: '',
      }))
    }

    console.log('comment added!')
  }

  onClickingLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(view => {
        if (id === view.id) {
          return {...view, isLiked: !view.isLiked}
        }
        return view
      }),
    }))
  }

  onClickingDelete = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(view => view.id !== id),
    }))
  }

  render() {
    const {commentsList, nameInput, commentInput} = this.state

    return (
      <div className="bg-container1">
        <div>
          <h1 className="main-heading1">Comments</h1>
          <p className="para1">Say something about 4.0 Technologies</p>
          <form
            className="comments-form-container1"
            onSubmit={this.onAddComment}
          >
            <input
              type="text"
              placeholder="Your Name"
              onChange={this.onNameEntry}
              value={nameInput}
            />
            <br />
            <textarea
              placeholder="Your Comment"
              onChange={this.onCommentEntry}
              rows="10"
              value={commentInput}
            />
            <button className="button1" type="submit">
              Add Comment
            </button>
          </form>
          <img
            className="comments-image1"
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
        </div>
        <hr />
        <div className="comments-count-container1">
          <p className="comments-count-para1">{commentsList.length}</p>
          <p className="para1">Comments</p>
        </div>
        <ul className="comments-container1">
          <li>Hello</li>
          {commentsList.map(view => (
            <CommentItem
              key={view.id}
              commentData={view}
              profileColor={view.profileColor}
              onClickingLike={this.onClickingLike}
              onClickingDelete={this.onClickingDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
