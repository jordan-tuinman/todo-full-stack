import { getTodos } from '../apis'

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
