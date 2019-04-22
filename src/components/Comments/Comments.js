import React, {useState, useEffect} from 'react'
import {commentService} from "../../services/CommentService";
import CommentsList from './CommentsList/CommentsList'
import {connect} from "react-redux";
import CreateComment from './CreateComment'

const comments = props => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const data = await commentService.getCommentsForGallery(props.galleryId);
      setComments(data)
    }

    fetchComments()
  }, []);

  const deleteComment = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Click ok to delete this comment or cancel this action')) {
      try {
        await commentService.deleteComment(id);
        setComments(comments.filter(comment => comment.id !== id))
      } catch (e) {
        return e
      }
    }
  };

  const addComment = comment => {
    setComments([...comments, comment])
  };

  return (
    <div className="comments">
      <h2>Comments</h2>
      <hr/>
      <CommentsList deleted={id => deleteComment(id)} comments={comments}/>
      <hr/>
      {props.loggedIn && <CreateComment galleryId={props.galleryId} commentCreated={comment => addComment(comment)}/>}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(comments);