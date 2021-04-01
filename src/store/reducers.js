import * as actions from './action'

export const todoReducer = (state, action) => {
    switch (action.type) {
      case actions.ADD_TODO:
        return {
          ...state,
          todos: [ ...state.todos, action.todo ]
        }
      case actions.DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((t, i) => i !== action.index)
        }
      case actions.SET_FILTER:
        return {
          ...state,
          filter: action.filter
        }
      case actions.TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((t, i) => {
            if (i === action.index) {
              t.done = !t.done;
            }
            return t;
          })
        }
      default:
        return state
    }
  }