const express = require('express')
const router = express.Router()

const { getTodos, addTodo, deleteTodo, updateTodo } = require('../db')

router.get('/todos', (req, res) => {
  getTodos()
    .then((todos) => {
      res.json(todos).sendStatus(200)
      return null
    })
    .catch(err => console.log(err))
})

router.post('/todos', (req, res) => {
  const todo = req.body
  console.log('route', req.body)
  addTodo(todo)
    .then(todo => {
      console.log(todo[0])
      return null
    })
    .then((newTodo) => {
      res.sendStatus(201).json(newTodo)
      return null
    })
    .catch(err => res.sendStatus(500).send(err.message))
})

router.delete('/todos/:id', (req, res) => {
  const { id } = req.params
  deleteTodo(id)
    .then(() => {
      res.sendStatus(202)
      return null
    })
    .catch(err => console.log(err))
})

// router.patch()

module.exports = router
