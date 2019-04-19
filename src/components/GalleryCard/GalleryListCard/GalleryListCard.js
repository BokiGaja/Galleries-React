import React from 'react'
import classes from './GalleryListCard.css'

const galleryListCard = props => (
  <div>
    <div className={['card', classes.cardImage].join(' ')} style={{
      background: ' linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url('+props.gallery.pictures[0].imageUrl+')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '25px'
    }}>
      <div className="text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-5">
        <h3 className="card-title text-center">{props.gallery.title}</h3>
        <p style={{fontStyle: 'italic'}}>
          Created by: {props.gallery.user.first_name} {props.gallery.user.last_name}
          <br/>
          {props.gallery.created_at}
          <button className="btn btn-outline-secondary">See Gallery</button>
        </p>
      </div>

    </div>
  </div>
);

export default galleryListCard;