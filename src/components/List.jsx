import { useState } from 'react';

export default function List(props) {
  const [input, setInput] = useState(""); 

  function addTask(e) {
    e.preventDefault();     
    props.setTask([...props.task, input]);   
    setInput("");                            
  }

  return (
    <>
        <form onSubmit={addTask} className="task-form">
        <label>
            Enter your task:{" "}
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
        </label>
        <button type="submit" disabled={!input.trim()}>Add</button>
        </form>

    </>
  );
}
