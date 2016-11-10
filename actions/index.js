import {v4} from "node-uuid";
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4().toString(),
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
export const receiveTodos = (filter,response) =>({
        type:'receive_todos',
        filter,
        response
})
