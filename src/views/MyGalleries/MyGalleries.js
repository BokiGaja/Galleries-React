import React, {useEffect} from 'react'
import {connect} from "react-redux";
import * as actions from '../../store/Gallery/indexActions'
import ListGalleries from '../../components/DisplayGalleries/ListGalleries/ListGalleries'
import {withRouter} from "react-router"
import Search from '../../components/Search/Search'


const myGalleries = props => {
  useEffect(() => {
    async function fetchGalleries() {
      if (props.match.params.id) {
        await props.onFetchUsersGalleries(props.match.params.id);
      } else {
        await props.onFetchUsersGalleries(props.userId);
      }
    }

    fetchGalleries();
  }, []);

  return (
    <div className="home">
      <Search/>
      <div>
        <ListGalleries galleries={props.galleries}/>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    galleries: state.gallery.galleries
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsersGalleries: (id) => dispatch(actions.fetchUserGalleries(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(myGalleries));