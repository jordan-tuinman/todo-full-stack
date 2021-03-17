import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveTodo } from '../actions'

function AddTodo ({ dispatch }) {
  const [newTodo, setTodo] = useState({
    todo: '',
    complete: 'false'
  })

  function handleChange (evt) {
    setTodo({ ...newTodo, todo: evt.target.value })
  }

  function handleSubmit (evt) {
    evt.preventDefault()
    dispatch(saveTodo(newTodo))
    setTodo({ todo: '', complete: 'false' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} className="new-todo" value={newTodo.todo} placeholder="What do you need to do?" autoFocus={true} />
    </form>
  )
}

export default connect()(AddTodo)
