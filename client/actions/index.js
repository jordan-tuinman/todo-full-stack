import { getTodos, deleteTodo, patchTodo } from '../apis'

export const setTodosState = (todos) => {
  return {
    type: 'GET_TODOS',
    todos
  }
}

export const setTodos = () => {
  return dispatch => {
    getTodos()
      .then((todos) => {
        dispatch(setTodosState(todos))
        return null
      })
      .catch(err => console.log(err.message))
  }
}

export const deleteTodoState = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const removeTodo = (id) => {
  return dispatch => {
    deleteTodo(id)
      .then(() => {
        dispatch(deleteTodoState(id))
        return null
      })
      .catch(err => console.log(err.message))
  }
}

export const updateTodoState = (todo) => {
  return {
    type: 'UPDATE_TODO',
    todo
  }
}

export const updateTodo = (todoUpdates) => {
  return dispatch => {
    patchTodo(todoUpdates)
      .then(() => {
        dispatch(updateTodoState(todoUpdates))
        return null
      })
      .catch(err => console.log(err.message))
  }
}
