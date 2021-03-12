const sample = [
  {
    id: 47,
    todo: 'Sample todo',
    state: 'active',
    complete: false
  }
]

export function todoReducer (state = sample, action) {
  switch (action.type) {
    case 'GET_TODOS':
      return action.state

    default:
      return state
  }
}
