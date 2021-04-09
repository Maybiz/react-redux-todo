import apiFirebase from '../config/api.firebase'

export const TRY_ADD_TODO = 'try add todo';
export const ADD_TODO_SUCCESS = 'add todo success';
export const ADD_TODO_ERROR = 'add todo error';

// export const DELETE_TODO = 'delete todo';

export const TRY_DELETE_TODO = 'try delete todo'
export const DELETE_TODO_SUCCESS = 'delete todo success'
export const DELETE_TODO_ERROR = 'delete todo error'



export const SET_FILTER = 'set filter';
export const TOGGLE_TODO = 'toggle todo';

export const REQUEST_TODO = 'request todo';
export const FETCH_TODO = 'fetch todo';
export const FETCH_TODO_SUCCESS = 'fetch todo success';
export const FETCH_TODO_ERROR = 'fetch todo error';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const tryAddTodo = (todo) => {
  return (dispatch, getState) => {
    const todos = [ ...getState().todos.data, todo ];
    return apiFirebase.put('todos.json', todos).then(
      response => dispatch(addTodoSuccess(todo)),
      error => dispatch(addTodoError(error))
    )
  }
}

export const addTodoSuccess = (todo) => {
  return {
    type: ADD_TODO_SUCCESS,
    todo
  }
}

export const addTodoError = (error) => {
  return {
    type: ADD_TODO_ERROR,
    error
  }
}

export const tryDeleteTodo = indexTodo => {
  return (dispatch, getState) => {
    const todos = getState().todos.data.filter((item, index) => indexTodo !== index)
    return apiFirebase.put('todos.json', todos).then(
      response => dispatch(deleteTodoSuccess(indexTodo)),
      error => dispatch(deleteTodoError(error))
    )
  }
}

export const deleteTodoSuccess = index => {
  return {
    type: DELETE_TODO_SUCCESS,
    index
  }
}

export const deleteTodoError = error => {
  return {
    type: DELETE_TODO_ERROR,
    error
  }
}

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  }
}

export const toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    index
  }
}

export const requestTodo = () => {
  return {
    type: REQUEST_TODO
  }
}

export const fetchTodoSuccess = (todos) => {
  return {
    type: FETCH_TODO_SUCCESS,
    todos
  }
}

export const fetchTodoError = (error) => {
  return {
    type: FETCH_TODO_ERROR,
    error
  }
}

export const fetchTodo = () => {
  return dispatch => {
    
    dispatch(requestTodo())

    return apiFirebase.get('todos.json')
    .then(resp => dispatch(fetchTodoSuccess(resp.data)))
    .catch(err => dispatch(fetchTodoError(err)))
  }
}