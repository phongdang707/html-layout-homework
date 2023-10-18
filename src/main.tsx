import React from 'react'
import ReactDOM from 'react-dom/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <div className="wrapper">
      <header>Todo App</header>
      <div className="inputField">
        <input type="text" placeholder="Add your new todo" />
        <button><i className="main-task"></i></button>
      </div>
      <ul className="todoList">
        <li className='todoList-task'>
            <span>Buy a new gaming laptop</span>
        </li>
        <li className='todoList-task'>
            <span>Complete a previous task</span>
            {/* <FontAwesomeIcon icon={"fa-solid fa-trash"}/> */}
        </li>
        <li className='todoList-task'>
            <span>Create video for youtube</span>
        </li>
        <li className='todoList-task'>
            <span>Create a new portfolio file</span>
        </li>
      </ul>
      <div className="footer">
        <span>You have 4 pending tasks</span>
        <button>Clear All</button>
      </div>
    </div>
  </React.StrictMode>
);