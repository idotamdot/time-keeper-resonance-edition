import { useEffect, useState } from 'react'
import { TaskList } from './components/TaskList'
import { TodayView } from './components/TodayView'
import { AddTaskForm } from './components/AddTaskForm'

function App() {
  const [intention, setIntention] = useState("");
  const [stars, setStars] = useState(0)
  const [tasks, setTasks] = useState<{ id: number; title: string; priority: string }[]>([])
  const [completedTasks, setCompletedTasks] = useState<string[]>([])

  // 🧠 Load saved tasks on first load
  useEffect(() => {
    const saved = localStorage.getItem("tasks")
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }, [])

  // 💾 Save tasks every time they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handleTaskComplete = (taskTitle: string) => {
    setStars(prev => prev + 1)
    setCompletedTasks(prev => [...prev, taskTitle])
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        🌟 Time Keeper: Resonance Edition
      </h1>

      <TodayView stars={stars} />

      {/* 🔧 Add Task Input Form */}
      <AddTaskForm setTasks={setTasks} />

      {/* 🌈 Task List */}
      <TaskList tasks={tasks} setTasks={setTasks} onComplete={handleTaskComplete} />

      {/* ✅ Completed Tasks */}
      {completedTasks.length > 0 && (
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '1rem',
          background: '#fdf6f0',
          boxShadow: '0 0 10px rgba(0,0,0,0.05)'
        }}>
          <h3>🌙 Completed Today</h3>
          <ul style={{ paddingLeft: '1.2rem' }}>
            {completedTasks.map((title, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>✅ {title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
