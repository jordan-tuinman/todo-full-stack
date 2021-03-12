import request from 'superagent'

export function getTodos () {
  request.get('/todos')
    .then((res) => {
      return res.body
    })
    .catch(err => console.log(err.message))
}

// export function addTodo () {

// }

// export function updateTodo () {

// }

// export function deleteTodo () {

// }
