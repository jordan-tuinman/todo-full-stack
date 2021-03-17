import React from 'react'
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
