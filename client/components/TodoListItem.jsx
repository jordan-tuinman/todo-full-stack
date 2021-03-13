import React from 'react'
import { connect } from 'react-redux'

import { removeTodo } from '../actions'

function TodoListItem ({ dispatch, todo }) {
  function handleDelete () {
    dispatch(removeTodo(todo.id))
  }

  return (
    <li key={todo.id} className={todo.state}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{todo.todo}</label>
        <button className="destroy" onClick={handleDelete}></button>
      </div>
      {/* <input className="edit" value="Create a TodoMVC template" /> */}
    </li>
  )
}

export default connect()(TodoListItem)
