import React from 'react'
import {withRouter} from "react-router";

const galleryListCard = props => {
  const seeAuthorsGalleries = () => {
    console.log('here');
    props.history.push('authors/'+props.gallery.user_id)
  };
  return (
    <div className="card card-image" style={{
      background: ' linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(' + props.gallery.pictures[0].imageUrl + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '25px'
    }}>
      <div className="text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-5">
        <h3 className="card-title text-center">{props.gallery.title}</h3>
        <p style={{fontStyle: 'italic', cursor: 'pointer'}} onClick={seeAuthorsGalleries}>
          Created by: {props.gallery.user.first_name} {props.gallery.user.last_name}
          <br/>
          {props.gallery.created_at}
          <br/>
          <button className="btn btn-outline-secondary">See Gallery</button>
        </p>
      </div>
    </div>
  )
};

export default withRouter(galleryListCard);