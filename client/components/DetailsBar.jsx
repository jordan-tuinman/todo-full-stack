import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeTodo } from '../actions'

function DetailsBar ({ dispatch, todos, location }) {
  const activeTodos = todos.filter(item => item.complete !== 'true')
  const completedTodos = todos.filter(item => item.complete === 'true')

  function handleClear () {
    completedTodos.forEach(item => {
      dispatch(removeTodo(item.id))
    })
  }

  return (
    <>
      {todos.length === 0
        ? <></>
        : <footer className="footer">
          <span className="todo-count"><span style={{ fontWeight: 800 }}>{activeTodos.length}</span>{activeTodos.length === 1 ? ' item left.' : ' items left.'}</span>
          <ul className="filters">
            <li>
              <NavLink activeClassName="selected" exact to="/">all</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/active">active</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/completed">completed</NavLink>
            </li>
          </ul>
          {completedTodos.length > 0
            ? <button onClick={handleClear} className="clear-completed">clear completed.</button>
            : <></>
          }
        </footer> }
    </>
  )
}

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(DetailsBar)
