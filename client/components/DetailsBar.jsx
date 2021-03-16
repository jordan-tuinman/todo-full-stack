import React from 'react'
import { connect } from 'react-redux'

function DetailsBar ({ todos }) {
  const activeTodos = todos.filter(item => item.complete !== 'true')
  const completedTodos = todos.some(item => item.complete === 'true')
  return (
    <>
      {todos.length === 0
        ? <></>
        : <footer className="footer">
          <span className="todo-count"><strong>{activeTodos.length}</strong> item left</span>
          <ul className="filters">
            <li>
              <a className="selected" href="/">All</a>
            </li>
            <li>
              <a href="/active">Active</a>
            </li>
            <li>
              <a href="/completed">Completed</a>
            </li>
          </ul>
          {completedTodos
            ? <button className="clear-completed">Clear completed</button>
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
