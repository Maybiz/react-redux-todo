import React from 'react';
import { Link } from 'react-router-dom'

const Filter = ({ setFilter }) => {

  return (
    <>
      <Link to="/all" className="btn btn-primary mr-2">Tout</Link>
      <Link to="/done" className="btn btn-primary mr-2">Fini</Link>
      <Link to="/active" className="btn btn-primary">En cours</Link>
    </>
  )
}

export default Filter