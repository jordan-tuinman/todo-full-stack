import request from 'superagent'

export function getTodos () {
  return request.get('/todos')
    .then((res) => {
      return res.body
    })
    .catch(err => console.log(err.message))
}

// export function addTodo () {

// }

export function patchTodo (todoUpdates) {
  return request.patch('/todos')
    .send(todoUpdates)
    .then((res) => {
      console.log('api', res.body)
      return res.body
    })
    .catch(err => console.log(err.message))
}

export function deleteTodo (id) {
  return request.delete(`/todos/${id}`)
    .then((res) => {
      return res.body
    })
    .catch(err => console.log(err.message))
}
