const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/todos', (req, res) => {
  db.getTodos()
    .then((todos) => {
      res.json(todos)
      return null
    })
    .catch(err => res.sendStatus(500).send(err.message))
})

router.post('/todos', (req, res) => {
  const todo = req.body
  db.addTodo(todo)
    .then(todo => {
      return db.findTodo(todo[0])
    })
    .then(newTodo => {
      res.json(newTodo)
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
    .catch(err => res.sendStatus(500).send(err.message))
})

router.patch('/todos', (req, res) => {
  const updateData = req.body
  db.updateTodo(updateData)
    .then(() => {
      res.sendStatus(202)
      return null
    })
    .catch(err => res.sendStatus(500).send(err.message))
})

module.exports = router
