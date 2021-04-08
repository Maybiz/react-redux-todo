import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux'
import { VisibilityFilters, deleteTodo, toggleTodo } from '../store/actions'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {

  return (
    <ul className="list-group">
      { todos && todos.map((item, index) => {
        return <TodoItem key={item.name} todo={item} deleteTodo={() => deleteTodo(index)} toggleTodo={() => toggleTodo(index) } />
      })}
    </ul>
  )
}

export default connect(state => {
  const filter = state.filter;
  let todos;
  switch(filter) {
    case VisibilityFilters.SHOW_DONE: {
      todos = state.todos.filter( item => item.done )
      break;
    }
    case VisibilityFilters.SHOW_ACTIVE: {
      todos = state.todos.filter( item => !item.done )
      break;
    }
    default: {
      todos = state.todos
      break;
    }
  }
  return {todos};
}, {
  toggleTodo,
  deleteTodo
})(TodoList);