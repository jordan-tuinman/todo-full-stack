import React, { useState } from 'react'
import { connect } from 'react-redux'

import { removeTodo, updateTodo } from '../actions'

function TodoListItem ({ dispatch, todo }) {
  const [todoEdit, setEdit] = useState({
    id: todo.id,
    todo: todo.todo,
    complete: todo.complete,
    edit: false
  })

  function handleCheck (evt) {
    dispatch(updateTodo(todo.id, { complete: String(evt.target.checked) }))
  }

  function toggleEdit () {
    setEdit({ ...todoEdit, edit: !todoEdit.edit })
  }

  function handleChange (evt) {
    setEdit({ ...todoEdit, todo: evt.target.value })
  }

  function handleEdit () {

  }

  function handleDelete () {
    dispatch(removeTodo(todo.id))
  }

  const todoState = (todo.complete === 'true' ? 'completed' : 'active')
  return (
    <li key={todo.id} className={todoState}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={handleCheck} defaultChecked={JSON.parse(todo.complete)}/>
        {!todoEdit.edit && <label onClick={toggleEdit}>{todo.todo}</label>}
        <button className="destroy" onClick={handleDelete}></button>
      </div>
      <form onSubmit={handleEdit}>
        {todoEdit.edit && <input onChange={handleChange} className="edit" value={todoEdit.todo}/> }
      </form>
    </li>
  )
}

export default connect()(TodoListItem)
