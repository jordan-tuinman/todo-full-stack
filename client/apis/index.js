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

export function patchTodo (id, patchData) {
  return request.patch(`/todos/${id}`)
    .send(patchData)
    .then((res) => {
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
