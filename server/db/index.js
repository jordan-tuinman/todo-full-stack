const database = require('./connection')

function getTodos (db = database) {
  return db('todos').select()
}

function addTodo (newTodo, db = database) {
  const { todo, state, complete } = newTodo
  return db('todos').insert({
    todo: todo,
    state: state,
    complete: complete
  })
}

function deleteTodo (id, db = database) {
  return db('todos').where('id', id).delete()
}

function updateTodo (id, newData, db = database) {
  return db('todos').where('id', id).update(newData)
}

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo
}
