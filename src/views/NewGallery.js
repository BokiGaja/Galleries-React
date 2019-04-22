import React, {useState} from 'react'
import {withRouter} from "react-router"
import {galleryService} from "../services/GalleryService";
import GalleryForm from '../components/GalleryForm/GalleryForm'

const newGallery = props => {

  const [inputError, setInputError] = useState('');

  const addGallery = async credentials => {
    try {
      await galleryService.createGallery(credentials);
      props.history.push('/myGalleries')
    } catch (e) {
      setInputError(e.response.data.error)
    }
  };

  return (
    <div style={{height: '100vh', marginTop: '150px'}}>
      {inputError.length > 0 &&
      <div className="alert alert-danger" style={{width: '300px', margin: '10px auto'}} role="alert">
        {inputError}
      </div>
      }
      <GalleryForm submitGallery={credentials => addGallery(credentials)} function={"Create New"}/>
    </div>
  )
};

export default withRouter(newGallery);