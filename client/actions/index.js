import { getTodos, deleteTodo } from '../apis'

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
