import React, {useEffect} from 'react'
import classes from './SingleGallery.css'
import {withRouter} from "react-router";
import PicturesCarousel from '../../components/PicturesCarousel'
import {connect} from "react-redux";
import * as actions from '../../store/Gallery/indexActions'

const singleGallery = props => {
  useEffect(() => {
    async function fetchGallery() {
      await props.onFetchSingleGallery(props.match.params.id);
    }

    fetchGallery();
  }, []);

  const seeAuthor = () => {
    props.history.push('/authors/' + props.gallery.user.id)
  };

  const editGallery = () => {
    props.history.push('/edit-gallery/' + props.gallery.id);
  };

  return (
    <div>
      {props.gallery &&
      <div style={{marginTop: '50px'}}>
        <h1 className={classes.cardTitle}>{props.gallery.title}</h1>
        <div className={classes.cardFrame}>
          <div style={{marginRight: '30px'}}>
            <PicturesCarousel pictures={props.gallery.pictures}/>
            <div className={classes.cardBody}>
              <h2 style={{fontStyle: 'italic', fontFamily: 'SansSerif'}}>Description</h2>
              <h4 className="card-text" style={{fontFamily: 'SansSerif'}}>"{props.gallery.description}"</h4>
              <p className="card-text text-muted" onClick={seeAuthor}
                 style={{cursor: 'pointer'}}>Author: {props.gallery.user.first_name} {props.gallery.user.last_name}</p>
              <p className="card-text text-muted">{props.gallery.created_at}</p>
            </div>
            {props.gallery.user_id == props.userId &&
            <button className="btn btn-primary" onClick={editGallery}>Edit</button>}
          </div>
        </div>
      </div>
      }
    </div>
  )
};

const mapStateToProps = state => {
  return {
    gallery: state.gallery.singleGallery,
    userId: state.auth.userId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchSingleGallery: id => dispatch(actions.fetchSingleGallery(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(singleGallery));