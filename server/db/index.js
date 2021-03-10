const connection = require('./connection')
const database = require('./connection')

function getTodos (db = database) {
  return db('todos').select()
}

function addTodo (todo, db = connection) {
  return db('todos').insert({ todo })
}

function deleteTodo (id, db = connection) {
  return db('todos').where('id', id).delete()
}

function updateTodo (id, newData, db = connection) {
  return db('todos').where('id', id).update(newData)
}

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo
}
