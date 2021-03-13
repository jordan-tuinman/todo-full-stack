import React from 'react'

import { deleteTodo } from '../apis'

function TodoListItem (props) {
  const { todo } = props
  console.log(todo)

  function handleDelete () {
    deleteTodo(todo.id)
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

export default TodoListItem
