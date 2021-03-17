import { getTodos, addTodo, deleteTodo, patchTodo } from '../apis'

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

export const addNewTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}

export const saveTodo = (todo) => {
  return dispatch => {
    addTodo(todo)
      .then((newTodo) => {
        dispatch(addNewTodo(newTodo))
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

export const updateTodo = (id, todoUpdates) => {
  return dispatch => {
    patchTodo(id, todoUpdates)
      .then(todo => {
        dispatch(updateTodoState(todo))
        return null
      })
      .catch(err => console.log(err.message))
  }
}
