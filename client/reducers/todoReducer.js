const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.todos

    case 'DELETE_TODO':
      return state.filter(item => item.id !== action.id)

    case 'UPDATE_TODO':
      return state.map(item =>
        item.id === action.todo.id ? action.todo : item
      )

    default:
      return state
  }
}

export default todoReducer
