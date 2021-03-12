import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import DetailsBar from './DetailsBar'

import { setTodos } from '../actions'

function App ({ dispatch }) {
  useEffect(() => {
    dispatch(setTodos())
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

export default connect()(App)
