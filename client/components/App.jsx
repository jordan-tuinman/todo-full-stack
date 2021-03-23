import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

// Components
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import ActiveList from './ActiveList'
import CompletedList from './CompletedList'
import DetailsBar from './DetailsBar'

import { setTodos } from '../actions'

function App ({ dispatch }) {
  useEffect(() => {
    dispatch(setTodos())
  }, [])

  return (
    <>
      <header className="header">
        <h1>todos.</h1>
        <Route path="/" component={AddTodo} />
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/active" component={ActiveList} />
          <Route path="/completed" component={CompletedList} />
        </Switch>
        <Route path="/" component={DetailsBar} />
      </header>
      <section className="main"></section>
    </>
  )
}

export default connect()(App)
