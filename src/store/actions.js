import apiFirebase from '../config/api.firebase'

export const ADD_TODO = 'add todo';
export const DELETE_TODO = 'delete todo';
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

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    todo
  }
}

export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    index
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