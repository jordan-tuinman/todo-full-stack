import React from 'react'
import { connect } from 'react-redux'

// TODO: Hide section when no todos
// TODO: connect to redux store state

function TodoList ({ todos }) {
  console.log(todos)
  return (
    <>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {/* Below code returns li for each todo */}
          {todos?.map((item) => {
            return (
              <li key={item.id} className={item.state}>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{item.todo}</label>
                  <button className="destroy"></button>
                </div>
                <input className="edit" value="Create a TodoMVC template" />
              </li>
            )
          })}

          {/* Example list items */}
          {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" checked />
              <label>Taste JavaScript</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" />
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Buy a unicorn</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" value="Rule the web" />
          </li>
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
