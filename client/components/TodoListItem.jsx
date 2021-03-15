import React from 'react'
import { connect } from 'react-redux'

import { removeTodo, updateTodo } from '../actions'

function TodoListItem ({ dispatch, todo }) {
  // SetTodoUpdates to new toggled state
  // Dispatch updateTodo action to update state and DB
  function handleToggle (evt) {
    dispatch(updateTodo(todo.id, { complete: String(evt.target.checked) }))
  }

  function handleDelete () {
    dispatch(removeTodo(todo.id))
  }

  return (
    <li key={todo.id} className={todo.state}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={handleToggle} />
        <label>{todo.todo}</label>
        <button className="destroy" onClick={handleDelete}></button>
      </div>
      {/* <input className="edit" value="Create a TodoMVC template" /> */}
    </li>
  )
}

export default connect()(TodoListItem)
