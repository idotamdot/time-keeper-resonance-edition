// 📁 frontend/src/components/AddTaskForm.tsx
import { useState } from 'react'

interface AddTaskFormProps {
  setTasks: React.Dispatch<React.SetStateAction<{ id: number; title: string; priority: string }[]>>
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ setTasks }) => {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('Medium')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) return

    const newTask = {
      id: Date.now(), // 🌟 unique enough for now
      title,
      priority,
    }

    setTasks((prev) => [...prev, newTask])

    // Reset form
    setTitle('')
    setPriority('Medium')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '1rem', padding: '0.5rem' }}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ marginRight: '1rem', padding: '0.5rem' }}
      >
        <option value="High">🔥 High</option>
        <option value="Medium">✨ Medium</option>
        <option value="Low">🌱 Low</option>
      </select>

      <button type="submit" style={{ padding: '0.5rem 1rem' }}>
        ➕ Add Task
      </button>
    </form>
  )
}
