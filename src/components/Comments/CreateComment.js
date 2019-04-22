import React, {useState} from 'react'
import {commentService} from "../../services/CommentService";
import {connect} from "react-redux";

const createComment = props => {
  const [credentials, setCredentials] = useState({
    content: '',
    gallery_id: props.galleryId,
    user_id: props.userId
  });

  const [errorMessage, setErrorMessage] = useState('');

  const createComment = async event => {
    event.preventDefault();
    const data = await commentService.createComment(credentials);
    if (data) {
      setErrorMessage(data.error);
    } else {
      const newUser = {content: credentials.content, user: {first_name: props.userName}}
      props.commentCreated(newUser);
      setCredentials({...credentials, content: ''});
    }
  };

  return (
    <div>
      <h4>Add Comment</h4>
      <form onSubmit={createComment}>
        <textarea cols="20" rows="10" className="form-control"
                  required maxLength="1000" style={{height: '100px', margin: '10px auto'}}
                  onChange={event => setCredentials({...credentials, content: event.target.value})}/>
        {errorMessage.length > 0 &&
        <div className="alert alert-danger" role="alert" style={{marginTop: '30px'}}>{errorMessage}</div>}
        <button className="btn btn-primary" type="submit">Add Comment</button>
      </form>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    userName: state.auth.userName
  };
};

export default connect(mapStateToProps)(createComment);