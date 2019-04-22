import React, {useEffect} from 'react'
import {connect} from "react-redux";
import * as actions from '../../store/Gallery/indexActions'
import ListGalleries from '../../components/DisplayGalleries/ListGalleries/ListGalleries'

const allGalleries = props => {
  useEffect(() => {
    async function fetchGalleries() {
      await props.onFetchGalleries();
    }

    fetchGalleries();
  }, []);

  return (
    <div className="home">
      <div>
        <ListGalleries galleries={props.galleries}/>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    galleries: state.gallery.galleries
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchGalleries: () => dispatch(actions.initGalleries())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(allGalleries);