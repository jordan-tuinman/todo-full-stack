import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'

import { updateTodo } from '../actions'

function TodoList ({ dispatch, todos }) {
  function toggleComplete () {
    todos.every(item => item.complete === 'true')
      ? todos.forEach(todo => {
        dispatch(updateTodo(todo.id, { complete: 'false' }))
      })
      : todos.forEach(todo => {
        dispatch(updateTodo(todo.id, { complete: 'true' }))
      })
  }

  return (
    <>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label onClick={toggleComplete} htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos?.map((item) => {
            return (
              <TodoListItem key={item.id} todo={item}/>
            )
          })}
        </ul>
      </section>
    </>
  )
}

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)
