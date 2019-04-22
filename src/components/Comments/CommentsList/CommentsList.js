import React from 'react'
import classes from './CommentsList.css'
import {connect} from "react-redux";

const commentsList = props => (
  <div className={classes.commentsList}>
    {props.comments.length === 0 && <h4>No comment</h4>}
    {props.comments.map((comment, index) => (
      <div key={index} className={classes.commentCard}>
        <h5>{comment.content}</h5>
        <p className="text-muted">by {comment.user.first_name} at {comment.created_at}</p>
        {comment.user_id == props.userId &&
        <button className="btn btn-danger" onClick={() => props.deleted(comment.id)}>Delete</button>}
      </div>
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  }
};

export default connect(mapStateToProps)(commentsList);