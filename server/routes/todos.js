const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/todos', (req, res) => {
  db.getTodos()
    .then((todos) => {
      res.sendStatus(200).json(todos)
      return null
    })
    .catch(err => console.log(err))
})

router.post('/todos', (req, res) => {
  const todo = req.body
  console.log('route', req.body)
  db.addTodo(todo)
    .then(todo => {
      return db.findTodo(todo[0])
    })
    .then(newTodo => {
      res.sendStatus(201).json(newTodo)
      return null
    })
    .catch(err => res.sendStatus(500).send(err.message))
})

router.delete('/todos/:id', (req, res) => {
  const { id } = req.params
  db.deleteTodo(id)
    .then(() => {
      res.sendStatus(202)
      return null
    })
    .catch(err => console.log(err))
})

// router.patch()

module.exports = router
