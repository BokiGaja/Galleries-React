import React, {useState, useEffect} from 'react'
import classes from "./GalleryForm.css";
import {connect} from "react-redux";
import {withRouter} from "react-router";

const galleryForm = props => {
  const [galleryData, setGalleryData] = useState(
    {
      title: props.match.params.id ? props.gallery.title : '',
      description: props.match.params.id ? props.gallery.description : '',
      user_id: props.userId
    }
  );

  const [images, setImages] = useState(props.match.params.id ? props.gallery.pictures.map(picture => picture.imageUrl) : ['']);

  useEffect(() => {
    if (props.gallery.user.id !== props.userId) {
      props.history.push('/myGalleries')
    }
  },[props.match.params.id]);

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

  const submitData = event => {
    event.preventDefault();
    props.submitGallery({...galleryData, images: images})
  };

  return (
    <div style={{height: '100vh'}}>
      <div className={classes.createPage}>
        <h1 className={classes.createTitle}>{props.function} Gallery</h1>
        <form onSubmit={submitData}>
          <button className="btn btn-success" type="button"
                  onClick={() => setImages([...images, ''])}>Add Image
          </button>
          <button className="btn btn-primary" type="submit" style={{margin: 'auto 10px'}}>
            {props.function} Gallery
          </button>
          <button className="btn btn-danger" type="button" onClick={goBack}>Cancel</button>
          <input type="text" className={['form-control', classes.createInput].join(' ')} placeholder="Title"
                 onChange={event => setGalleryData({...galleryData, title: event.target.value})}
                 value={galleryData.title} required/>
          <textarea className="form-control D" placeholder="Description" rows="3"
                    onChange={event => setGalleryData({...galleryData, description: event.target.value})} required
                    value={galleryData.description}/>
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

export default connect(mapStateToProps)(withRouter(galleryForm));