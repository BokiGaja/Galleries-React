import React, {useState} from 'react'
import classes from './ListGalleries.css'
import GalleryListCard from '../../GalleryCard/GalleryListCard/GalleryListCard'

export const listGalleries = props => {
  const [currPage, changeCurrPage] = useState(1);
  const [listedGalleries, setListedGalleries] = useState(currPage*10)

  return (
    <div className={classes.listGalleries}>
      <div className={classes.wrapper}>
      {
        props.galleries.slice(0, listedGalleries).map(gallery => (
          <GalleryListCard gallery={gallery} key={gallery.id}/>
        ))}
      {
        props.galleries.length > currPage * 10 ?
          <button className={['btn btn-info btn-lg', classes.showMoreButton].join(' ')} onClick={changeCurrPage(currPage+1)}>
            Load more</button>
          : null
      }
      {
        props.galleries.length === 0 ?
          <div className="alert alert-danger" style={{textAlign: 'center'}}>There is no
            gallery
          </div>
          :
          null
      }
      </div>
    </div>
  )
};

export default listGalleries;