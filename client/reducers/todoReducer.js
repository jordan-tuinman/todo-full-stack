const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.todos

    default:
      return state
  }
}

export default todoReducer
