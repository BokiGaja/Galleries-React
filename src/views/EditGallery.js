import React, {useState, useEffect} from 'react'
import GalleryForm from "../components/GalleryForm/GalleryForm";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import * as actions from '../store/Gallery/indexActions'
import {galleryService} from "../services/GalleryService";

const editGallery = props => {
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    async function fetchGallery() {
      const response = await props.onFetchGallery(props.match.params.id);
      if (response) {
        setInputError(response.response.data.error)
      }
    }
    fetchGallery();
  }, []);

  const editGallery = async credentials => {
    try {
      await galleryService.editGallery(props.gallery.id, credentials);
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
      {props.gallery ?
        <GalleryForm submitGallery={credentials => editGallery(credentials)} function={"Edit"} gallery={props.gallery}/>
        : <div>Loading</div>}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    gallery: state.gallery.singleGallery
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchGallery: id => dispatch(actions.fetchSingleGallery(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(editGallery));