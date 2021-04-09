import React, { useRef } from 'react';
import { connect } from 'react-redux'
import { tryAddTodo } from '../store/actions'

const AddTodo = ({ tryAddTodo }) => {

  const inputRef = useRef(null)

  const submitTodo = () => {
    tryAddTodo({
      name: inputRef.current.value,
      done: false
    })
    inputRef.current.value = ''
  }

  return (
    <div className="d-flex mb-4">
      <input ref={inputRef} type="text" className="form-control mr-5" />
      <button onClick={submitTodo} className="btn btn-success"> Ajouter </button>
    </div>
  )
}

export default connect(null, { tryAddTodo })(AddTodo);