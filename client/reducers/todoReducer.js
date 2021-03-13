const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.todos

    case 'DELETE_TODO':
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}

export default todoReducer
