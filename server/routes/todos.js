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

// router.post()

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
