// const sample = [
//   {
//     id: 47,
//     todo: 'Sample todo',
//     state: 'active',
//     complete: false
//   }
// ]

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.todos

    default:
      return state
  }
}

export default todoReducer
