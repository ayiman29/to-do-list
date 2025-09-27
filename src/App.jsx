import { useState } from 'react'
import './App.css'
import List from './components/List'
import Display from './components/Display'
import Done from './components/Done'
import Navbar from './components/Navbar'


function App() {
  const [task, setTask] = useState([])
  const [doneTask, setDoneTask] = useState([])
  const entryElements = task.map((entry, index) => {
      return (
          <Display key={index} entry={entry} setTask={setTask} task = {task} doneTask = {doneTask} setDoneTask = {setDoneTask}/>

      )
  })
  const doneElements = doneTask.map((entry, index) => {
    return (
      <Done key={index} entry={entry} doneTask={doneTask} />
    )
  }

  )
  function clearHistory() {
    setDoneTask([])
  }

  return (
    <>
      <Navbar />
      <List task={task} setTask={setTask} />

      <div className="task-sections">
        <div className="task-list">
          <h2 className="section-title">Pending Tasks</h2>
          {entryElements}
        </div>

        <div className="done-list">
          <h2 className="section-title">Completed Tasks</h2>
          {doneElements}
        </div>
      </div>

      <button className="clear-history" onClick={clearHistory}>Clear History</button>
    </>
  );


}

export default App
