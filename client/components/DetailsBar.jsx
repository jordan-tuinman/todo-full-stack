import React from 'react'

// TODO: hide component when 0 todos in list

function DetailsBar () {
  return (
    <>
      <footer className="footer">
        <span className="todo-count"><strong>0</strong> item left</span>
        <ul className="filters">
          <li>
            <a className="selected" href="/">All</a>
          </li>
          <li>
            <a href="/active">Active</a>
          </li>
          <li>
            <a href="/completed">Completed</a>
          </li>
        </ul>
        {/* TODO: hide when no completed items */}
        <button className="clear-completed">Clear completed</button>
      </footer>
    </>
  )
}

export default DetailsBar
