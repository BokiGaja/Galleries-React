import React from 'react'

const picturesCarousel = props => (
  <div style={{width: '700px', height: '400px'}}>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{margin: 'auto'}}>
      <ol className="carousel-indicators">
        {props.pictures.map((picture, index) =>
          <li data-target="carouselExampleIndicators" key={index} data-slide-to={index}
              className={index === 0 ? 'active' : null}/>
        )}
      </ol>
      <div className="carousel-inner">
        {props.pictures.map((picture, index) =>
          <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={index}>
            <a href={picture.imageUrl} target="_blank" rel="noopener noreferrer">
              <img src={picture.imageUrl} alt="FirstSlide" className="d-block"
                   style={{width: '700px', height: '400px'}}/>
            </a>
          </div>
        )}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"/>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"/>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
);

export default picturesCarousel;