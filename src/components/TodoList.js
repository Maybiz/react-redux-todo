import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem';
// import { connect } from 'react-redux'
import { VisibilityFilters, toggleTodo, deleteTodo, fetchTodo } from "../store/actions";

const TodoList = () => {

  const getFilter = useSelector(state => state.filter)
  const getTodos = useSelector(state => state.todos.data)
  const dispatch = useDispatch()

  const [todos, setTodos] = useState([])

  useEffect(() => {

    dispatch(fetchTodo())

    switch (getFilter) {
      case VisibilityFilters.SHOW_DONE: {
        setTodos(getTodos.filter( item => item.done ))
        break;
      }
      case VisibilityFilters.SHOW_ACTIVE: {
        setTodos(getTodos.filter( item => !item.done ))
        break;
      }
      default: {
        setTodos(getTodos)
        break;
      }
    }

    console.log(todos)

  }, [getFilter, getTodos])



  return (
    <ul className="list-group">
      { todos && todos.map( (item, index) => (
        <TodoItem
          key={ item.name }
          todo={ item }
          deleteTodo={ () => dispatch(deleteTodo(index)) }
          toggleTodo={ () => dispatch(toggleTodo(index)) }
        />
      )) }
    </ul>
  )
}

export default TodoList







// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     props.fetchTodo();
//   }

//   render() {
//     const { todos, deleteTodo, toggleTodo } = this.props;
//     return (
//       <ul className="list-group">
//         { todos && todos.map( (item, index) => (
//           <TodoItem
//             key={ item.name }
//             todo={ item }
//             deleteTodo={ () => deleteTodo(i) }
//             toggleTodo={ () => toggleTodo(i) }
//           />
//         )) }
//       </ul>
//     )
//   }
// }

// export default connect(state => {
//   const filter = state.filter;
//   let todos;
//   switch(filter) {
//     case VisibilityFilters.SHOW_DONE: {
//       todos = state.todos.data.filter( item => item.done )
//       break;
//     }
//     case VisibilityFilters.SHOW_ACTIVE: {
//       todos = state.todos.data.filter( item => !item.done )
//       break;
//     }
//     default: {
//       todos = state.todos.data
//       break;
//     }
//   }
//   return {todos};
// }, {
//   toggleTodo,
//   deleteTodo,
//   fetchTodo
// })(TodoList);