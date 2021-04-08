import * as actions from './actions';

const initialStateTodos = {
    data: [],
    loading: false,
    error: null
}

export const todos = (state = initialStateTodos, action) => {
    switch (action.type) {
      case actions.ADD_TODO:
        return {
          ...state,
          data: [...state.data, action.todo]
      }
      case actions.DELETE_TODO:
        return {
          ...state,
          data: state.data.filter((item, index) => index !== action.index)
      }
      case actions.TOGGLE_TODO:
        return {
          ...state,
          data: state.data.map((item, index) => index === action.index ? { ...item, done: !item.done } : item)
      }
      case actions.REQUEST_TODO:
        return {
          ...state,
          loading: true
      }
      case actions.FETCH_TODO_SUCCESS:
        return {
          ...state,
          data: [ ...state.data, ...action.todos ],
          loading: false,
          error: null
      }
      case actions.FETCH_TODO_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error
      }
      default: return state
    }
}

export const filter = (state = actions.VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
    case actions.SET_FILTER:
      return action.filter;
    default:
      return state
  }
}


