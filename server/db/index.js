const database = require('./connection')

function findTodo (id, db = database) {
  return db('todos').where('id', id).select()
}

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

function updateTodo (todoUpdates, db = database) {
  const { id, todo, state, complete } = todoUpdates
  return db('todos').where('id', id).update({
    todo: todo,
    state: state,
    complete: complete
  })
}

module.exports = {
  findTodo,
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo
}
