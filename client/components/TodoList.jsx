import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'

// TODO: Hide section when no todos

function TodoList ({ todos }) {
  return (
    <>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((item) => {
            return (
              < TodoListItem key={item.id} todo={item}/>
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
