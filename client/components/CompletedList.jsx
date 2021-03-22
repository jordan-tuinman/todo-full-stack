import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'

import { updateTodo } from '../actions'

function CompletedList ({ dispatch, todos }) {
  function toggleComplete () {
    todos.forEach(todo => {
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
            if (item.complete === 'true') {
              return (
                <TodoListItem key={item.id} todo={item}/>
              )
            }
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

export default connect(mapStateToProps)(CompletedList)
