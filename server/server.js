const express = require('express')
const path = require('path')

const server = express()

const todos = require('./routes/todos')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', todos)

module.exports = server
