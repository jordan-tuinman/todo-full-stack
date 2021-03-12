import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import DetailsBar from './DetailsBar'

import { getTodos } from '../apis'

function App () {
  useEffect(() => {
    getTodos()
  }, [])

  return (
    <>
      <header className="header">
        <h1>todos...</h1>
        <AddTodo />
        <TodoList />
        <DetailsBar />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
