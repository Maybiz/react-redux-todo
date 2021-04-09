import React from 'react';
import { connect } from 'react-redux'
import { setFilter, VisibilityFilters } from '../store/actions';

const Filter = ({ setFilter }) => {

  return (
    <>
      <button className="btn btn-primary mr-2" onClick={() => setFilter(VisibilityFilters.SHOW_ALL)}> Tout </button>
      <button className="btn btn-primary mr-2" onClick={() => setFilter(VisibilityFilters.SHOW_DONE)}> Fini </button>
      <button className="btn btn-primary" onClick={() => setFilter(VisibilityFilters.SHOW_ACTIVE)}> En cours </button>  
    </>
  )
}

export default connect(null, {
  setFilter
})(Filter);