import React, {useState} from 'react'
import {connect} from "react-redux"
import * as actions from '../../store/Gallery/indexActions'

const search = props => {
  const [searchParams, setSearchParams] = useState('');

  const searchGalleries = event => {
    console.log('here');
    event.preventDefault();
    props.onSearch(searchParams);
  };
  return (
    <div style={{textAlign: 'center', width: '500px', margin: '10px auto'}}>
      <div className="d-flex f-row">
        <form className="form-inline" style={{width: '350px', margin: '20px auto'}} onSubmit={searchGalleries}>
          <input className="form-control mr-sm-1" type="text" placeholder="Search" aria-label="Search"
                 onChange={event => setSearchParams(event.target.value)}/>
          <button className="btn btn-outline-info btn-rounded my-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: params => dispatch(actions.searchGallery(params))
  }
};

export default connect(null, mapDispatchToProps)(search);