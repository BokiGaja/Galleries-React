import React from 'react'
import classes from './Navigation.css'
import GalleryLinks from './GalleryLinks/GalleryLinks'
import AuthLinks from './AuthLinks/AuthLinks'

const navigation = () => (
  <nav className={['navbar', classes.navigation].join(' ')}>
    <div className="form-inline" style={{margin: 'auto'}}>
      <GalleryLinks/>
      <AuthLinks/>
    </div>
  </nav>
);

export default navigation;