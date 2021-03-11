const express = require('express')
const router = express.Router()

const { getTodos, addTodo, deleteTodo, updateTodo } = require('../db')

router.get('/todos', (req, res) => {
  getTodos()
    .then((todos) => {
      return res.json(todos)
    })
    .catch(err => console.log(err))
})

// router.post()

// router.delete()

// router.patch()

module.exports = router
