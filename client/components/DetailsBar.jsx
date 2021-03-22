import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeTodo } from '../actions'

function DetailsBar ({ dispatch, todos }) {
  const activeTodos = todos.filter(item => item.complete !== 'true')
  const completedTodos = todos.filter(item => item.complete === 'true')

  function handleClear () {
    console.log(completedTodos)
    completedTodos.forEach(item => {
      dispatch(removeTodo(item.id))
    })
  }
  // TODO: look at button class - selected
  return (
    <>
      {todos.length === 0
        ? <></>
        : <footer className="footer">
          <span className="todo-count"><strong>{activeTodos.length}</strong> item left</span>
          <ul className="filters">
            <li>
              <Link className="selected" to="/">All</Link>
            </li>
            <li>
              <Link to="/active">Active</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
          </ul>
          {completedTodos.length > 0
            ? <button onClick={handleClear} className="clear-completed">Clear completed</button>
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
