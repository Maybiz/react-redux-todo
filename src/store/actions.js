import apiFirebase from '../config/api.firebase'

export const TRY_ADD_TODO = 'try add todo';
export const ADD_TODO_SUCCESS = 'add todo success';
export const ADD_TODO_ERROR = 'add todo error';

export const TRY_DELETE_TODO = 'try delete todo'
export const DELETE_TODO_SUCCESS = 'delete todo success'
export const DELETE_TODO_ERROR = 'delete todo error'

export const TRY_TOGGLE_TODO = 'try toggle todo'
export const TOGGLE_TODO_SUCCESS = 'toggle todo success'
export const TOGGLE_TODO_ERROR = 'toggle todo error'

export const REQUEST_TODO = 'request todo';
export const FETCH_TODO = 'fetch todo';
export const FETCH_TODO_SUCCESS = 'fetch todo success';
export const FETCH_TODO_ERROR = 'fetch todo error';

export const tryAddTodo = (todo) => {
  return async (dispatch, getState) => {
    const todos = [ ...getState().todos.data, todo ]  
    try {
      await apiFirebase.put('todos.json', todos)
      dispatch(addTodoSuccess(todo))
    } catch(e) {
      dispatch(addTodoError(e))
    }  
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
  return async (dispatch, getState) => {
    const todos = getState().todos.data.filter((item, index) => indexTodo !== index)
    try {
      await apiFirebase.put('todos.json', todos)
      dispatch(deleteTodoSuccess(indexTodo))
    } catch(e) {
      dispatch(deleteTodoError(e))
    }
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

export const tryToggleTodo = (indexTodo) => {
  return async (dispatch, getState) => {
    const todos = getState().todos.data.map((item, index) => index === indexTodo ? { ...item, done: !item.done } : item)
    try {
      await apiFirebase.put('todos.json', todos)
      dispatch(toggleTodoSuccess(indexTodo))
    } catch(e) {
      dispatch(toggleTodoError(e))
    }
  }
}

export const toggleTodoSuccess = index => {
  return {
    type: TOGGLE_TODO_SUCCESS,
    index
  }
}

export const toggleTodoError = error => {
  return {
    type: TOGGLE_TODO_ERROR,
    error
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
  return async dispatch => { 
    dispatch(requestTodo())
    try {
      const response = await apiFirebase.get('todos.json')
      dispatch(fetchTodoSuccess(response.data))
    } catch(e) {
      dispatch(fetchTodoError(e))
    }
  }
}