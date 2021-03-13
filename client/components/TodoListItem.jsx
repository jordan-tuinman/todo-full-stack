import React, { useState } from 'react'
import { connect } from 'react-redux'

import { removeTodo, updateTodo } from '../actions'

function TodoListItem ({ dispatch, todo }) {
  const [todoUpdates, setTodoUpdates] = useState({
    id: todo.id,
    todo: todo.todo,
    state: todo.state,
    complete: todo.complete
  })

  // SetTodoUpdates to new toggled state
  // Dispatch updateTodo action to update state and DB
  function handleToggle (evt) {
    console.log(evt.target.checked)
    // error: cannot read property of .then()
    setTodoUpdates(todoUpdates => {
      return { ...todoUpdates, complete: evt.target.checked }
    })
      .then((todo) => {
        dispatch(updateTodo(todo))
        return null
      })
  }

  function handleDelete () {
    dispatch(removeTodo(todo.id))
  }

  return (
    <li key={todo.id} className={todo.state}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleToggle} />
        <label>{todo.todo}</label>
        <button className="destroy" onClick={handleDelete}></button>
      </div>
      {/* <input className="edit" value="Create a TodoMVC template" /> */}
    </li>
  )
}

export default connect()(TodoListItem)
