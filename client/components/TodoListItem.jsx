import React, { useState } from 'react'
import { connect } from 'react-redux'

import { removeTodo, updateTodo } from '../actions'

function TodoListItem ({ dispatch, todo }) {
  const [todoEdit, setEdit] = useState({
    todo: todo.todo,
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

  function handleSubmit (evt) {
    evt.preventDefault()
    dispatch(updateTodo(todo.id, { todo: todoEdit.todo }))
    setEdit({
      todo: todoEdit.todo,
      edit: false
    })
  }

  function handleDelete () {
    dispatch(removeTodo(todo.id))
  }

  const status = (todo.complete === 'true' ? 'completed' : 'active')
  const todoState = todoEdit.edit === true ? 'editing' : status
  return (
    <li key={todo.id} className={todoState}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={handleCheck} defaultChecked={JSON.parse(todo.complete)}/>
        {!todoEdit.edit && <label onDoubleClick={toggleEdit}>{todo.todo}</label>}
        <button className="destroy" onClick={handleDelete}></button>
      </div>
      <form onSubmit={handleSubmit}>
        {todoEdit.edit && <input onChange={handleChange} className="edit" value={todoEdit.todo}/> }
      </form>
    </li>
  )
}

export default connect()(TodoListItem)
