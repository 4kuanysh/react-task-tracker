import { useState } from 'react'
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const name = "Kuanysh"

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Kuanysh",
      day: "asdads",
      reminder: true,
    },
    {
      id: 2,
      text: "Kuanysh1",
      day: "bbbb",
      reminder: false,
    },
    {
      id: 3,
      text: "Kuanysh2",
      day: "cccc",
      reminder: false,
    },
    {
      id: 4,
      text: "Kuanysh3",
      day: "dddd",
      reminder: false,
    }
  ])

  const [showAddButton, setShowAddButton] = useState(false)

  // Add Task
  const addTask = (task) => {
    const id = Math.ceil(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete', id)
  }

  const toggleReminer = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header title="Kuanysh" onAdd={() => setShowAddButton(!showAddButton)} showAdd={showAddButton}/>
      {showAddButton && <AddTask onAdd={addTask} /> }
      {
        tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminer} />) : ("No Tasks to show")
      }
    </div>
  );
}

export default App;
