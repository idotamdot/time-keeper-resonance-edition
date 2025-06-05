import './styles/globals.css'
import { TaskList } from './components/TaskList'
import { AddTaskForm } from './components/AddTaskForm'
import { TodayView } from './components/TodayView'
import { useEffect, useState } from 'react'

interface Task {
  id: number;
  title: string;
  priority: string;
}

function App() {
  const [stars, setStars] = useState(0)
  const [tasks, setTasks] = useState<Task[]>([])
  const [completedTasks, setCompletedTasks] = useState<string[]>([])

  // Load from backend
  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
  }, [])

  const handleTaskComplete = (taskTitle: string) => {
    setStars((prev) => prev + 1)
    setCompletedTasks((prev) => [...prev, taskTitle])
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        🌟 Time Keeper: Resonance Edition
      </h1>

      <TodayView stars={stars} />
      {/* 📝 Optional: AddTaskForm if you want to let user add tasks */}
      {/* <AddTaskForm setTasks={setTasks} /> */}
      <AddTaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} onComplete={handleTaskComplete} />

      {completedTasks.length > 0 && (
        <div
          style={{
            marginTop: '2rem',
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '1rem',
            background: '#fdf6f0',
            boxShadow: '0 0 10px rgba(0,0,0,0.05)',
          }}
        >
          <h3>🌙 Completed Today</h3>
          <ul style={{ paddingLeft: '1.2rem' }}>
            {completedTasks.map((title, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>
                ✅ {title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
