import React, {useState, useEffect} from 'react'
import classes from './NewGallery.css'
import {withRouter} from "react-router"
import {connect} from "react-redux"
import * as actions from '../../store/Gallery/indexActions'
import {galleryService} from "../../services/GalleryService";

const newGallery = props => {
  const [galleryData, setGalleryData] = useState(
    {
      title: '',
      description: '',
      user_id: props.userId
    }
  );

  useEffect(() => {
    async function fetchGallery(id) {
      props.onFetchSingleGallery(id)
    }

    if (props.match.params.id) {
      setEditing(true);
      fetchGallery(props.match.params.id)
    }
  }, []);

  useEffect(() => {
    async function changeState() {
      await setImages([...props.gallery.pictures.map(picture => picture.imageUrl)]);
      const newGalleryData = {title: props.gallery.title, description: props.gallery.description};
      await setGalleryData(newGalleryData);
    }

    if (props.gallery) {
      changeState();
    }
  }, [props.gallery]);

  const [images, setImages] = useState(['']);

  const [inputError, setInputError] = useState({
    errorMessage: ''
  });

  const [editing, setEditing] = useState(false);

  const goBack = () => {
    props.history.push('/myGalleries')
  };

  const setImage = (event, index) => {
    const newImages = images.map((image, currIndex) => {
      if (currIndex === index) {
        return event.target.value
      }
      return image
    });
    setImages(newImages);
  };

  const moveInput = (index, direction) => {
    let currArr = [...images];
    if (direction === 'up') {
      const currInput = currArr[index - 1];
      currArr[index - 1] = currArr[index];
      currArr[index] = currInput;
    }
    if (direction === 'down') {
      const currInput = currArr[index + 1];
      currArr[index + 1] = currArr[index];
      currArr[index] = currInput;
    }
    setImages(currArr);
  };

  const removeImage = index => {
    let newArr = images.splice(index, 1);
    setImages(newArr);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const data = {...galleryData, images: images};
    if (!editing) {
      galleryService.createGallery(data)
        .then(res => {
          props.onCreateNewGallery(data);
          props.history.push('/myGalleries')
        })
        .catch(error =>
          setInputError({...inputError, errorMessage: error.response.data.error})
        );
    } else {
      galleryService.editGallery(props.match.params.id, {...data, user_id: props.userId, gallery_id: props.gallery.id})
        .then(props.history.push('/myGalleries'))
        .catch(error => setInputError({...inputError, errorMessage: error.response.data.error}))
    }
  };

  return (
    <div style={{height: '100vh', marginTop: '150px'}}>
      {inputError.errorMessage.length > 0 &&
      <div className="alert alert-danger" style={{width: '300px', margin: '10px auto'}} role="alert">
        {inputError.errorMessage}
      </div>
      }
      <div className={classes.createPage}>
        <h1 className={classes.createTitle}>{editing ? 'Edit your' : 'Create New'} Gallery</h1>
        <form onSubmit={handleSubmit}>
          <button className="btn btn-success" type="button"
                  onClick={() => setImages([...images, ''])}>Add Image
          </button>
          <button className="btn btn-primary" type="submit" style={{margin: 'auto 10px'}}>
            {editing ? 'Edit' : 'Create New'} Gallery
          </button>
          <button className="btn btn-danger" type="button" onClick={goBack}>Cancel</button>
          <input type="text" className={['form-control', classes.createInput].join(' ')} placeholder="Title"
                 onChange={event => setGalleryData({...galleryData, title: event.target.value})}/>
          <textarea className="form-control D" placeholder="Description" rows="3"
                    onChange={event => setGalleryData({...galleryData, description: event.target.value})}/>
          {images.map((image, index) =>
            <div key={index}>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <button className="btn btn-danger" type="button"
                        onClick={index => removeImage(index)}>-
                </button>
                <input type="text" placeholder="Image URL" className={['form-control', classes.createInput
                ].join(' ')} onChange={event => setImage(event, index)} value={images[index]}/>
                {index !== 0 &&
                <button className="btn btn-success" type="button" onClick={() => moveInput(index, 'up')}>↑</button>
                }
                {index !== images.length - 1 &&
                <button className="btn btn-danger" type="button" onClick={() => moveInput(index, 'down')}>↓</button>
                }
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    gallery: state.gallery.singleGallery
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateNewGallery: data => dispatch(actions.addNewGallery(data)),
    onFetchSingleGallery: id => dispatch(actions.fetchSingleGallery(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(newGallery));