import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList.jsx'

function App() {
  {/*const [count, setCount] = useState(0)*/}

  return (
    <div className="app">
      <header>
        <h2>Simple ToDo List</h2>
        <button>+</button>
      </header>
      <div className="body">
        {<TodoList />}
      </div>
      <footer>
        <span className="active">NOT YET</span>
        <span>DONE</span>
      </footer>
    </div>
  )
}

export default App
