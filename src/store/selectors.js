import { createSelector } from 'reselect'

export const filterSelector = (state, filter) => filter;
export const todosSelector = state => state.todos;

export const todosListSelector = createSelector(
  [todosSelector],
  (todos) => todos ? todos.data : null
)

export const filteredTodoDataSelector = createSelector(
   [filterSelector, todosSelector],
   (filter, todos) => {
     if (todos && filter) {
       switch(filter) {
         case 'done': {
           return todos.data.filter( item => item.done )
         }
         case 'active': {
           return todos.data.filter( item => !item.done )
         }
         default: {
           return todos.data
         }
       }
     }
   }
 ) 