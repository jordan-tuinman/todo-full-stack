import React, { useState } from 'react'

function AddTodo (props) {
  const [newTodo, setTodo] = useState({
    todo: '',
    complete: 'false'
  })

  function handleChange (evt) {
    setTodo({ ...newTodo, todo: evt.target.value })
  }

  return (
    <form>
      <input onChange={handleChange} className="new-todo" placeholder="What do you need to do?" autoFocus={true} />
    </form>
  )
}

export default AddTodo
