import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem'
import { tryToggleTodo, fetchTodo, tryDeleteTodo } from "../store/actions"
import { filteredTodoDataSelector } from '../store/selectors'

const TodoList = ({ todos, tryToggleTodo, tryDeleteTodo, fetchTodo, ...props }) => {

  useEffect(() => {
    fetchTodo()
  }, [])

  return (
    <ul className="list-group">
      { todos && todos.map( (item, index) => (
        <TodoItem
          key={ item.name }
          todo={ item }
          deleteTodo={ () => tryDeleteTodo(index) }
          toggleTodo={ () => tryToggleTodo(index) }
        />
      )) }
    </ul>
  )
}

export default connect((state, ownProps) => {
  const filter = ownProps.match.params.filter;
  return {
    todos: filteredTodoDataSelector(state, filter)
  }
}, {tryToggleTodo, tryDeleteTodo, fetchTodo})(TodoList);