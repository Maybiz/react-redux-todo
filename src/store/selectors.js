import { createSelector } from 'reselect'
import { VisibilityFilters } from './actions';

export const filterSelector = state => state.filter;
export const todosSelector = state => state.todos;

export const filteredTodoDataSelector = createSelector(
   [filterSelector, todosSelector],
   (filter, todos) => {
     if (todos && filter) {
       switch(filter) {
         case VisibilityFilters.SHOW_DONE: {
           return todos.data.filter( item => item.done )
         }
         case VisibilityFilters.SHOW_ACTIVE: {
           return todos.data.filter( item => !item.done )
         }
         default: {
           return todos.data
         }
       }
     }
   }
 ) 