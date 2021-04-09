import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem';
import { VisibilityFilters, toggleTodo, fetchTodo, tryDeleteTodo } from "../store/actions";

const TodoList = () => {

  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
  const todos = useSelector(state => {
    let result
    switch (filter) {
      case VisibilityFilters.SHOW_DONE: {
        result = state.todos.data.filter( t => t.done )
        break;
      }
      case VisibilityFilters.SHOW_ACTIVE: {
        result = state.todos.data.filter( t => !t.done )
        break;
      }
      default: {
        result = state.todos.data
        break;
      }
    }
    return result
  })

  useEffect(() => {
    dispatch(fetchTodo())
  }, [])

  return (
    <ul className="list-group">
      { todos && todos.map( (item, index) => (
        <TodoItem
          key={ item.name }
          todo={ item }
          deleteTodo={ () => dispatch(tryDeleteTodo(index)) }
          toggleTodo={ () => dispatch(toggleTodo(index)) }
        />
      )) }
    </ul>
  )
}

export default TodoList