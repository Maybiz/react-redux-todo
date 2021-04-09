import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem'
import { toggleTodo, fetchTodo, tryDeleteTodo } from "../store/actions"
import { filteredTodoDataSelector } from '../store/selectors'

const TodoList = () => {

  const dispatch = useDispatch()
  const todos = useSelector(state => {
    return filteredTodoDataSelector(state)
  })

  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])

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