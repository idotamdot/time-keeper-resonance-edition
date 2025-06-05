// 📁 frontend/src/components/AddTaskForm.tsx
import React, { useState } from "react";

interface AddTaskFormProps {
  setTasks: React.Dispatch<React.SetStateAction<{ id: number; title: string; priority: string }[]>>;
}

export function AddTaskForm({ setTasks }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      priority,
    };
    setTasks((prev) => [...prev, newTask]);
    setTitle("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h3 style={{ marginBottom: "0.5rem" }}>➕ Add a New Task</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
        style={{ marginRight: "1rem", padding: "0.4rem", width: "200px" }}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ marginRight: "1rem", padding: "0.4rem" }}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button type="submit" style={{ padding: "0.4rem 1rem", cursor: "pointer" }}>
        Add
      </button>
    </form>
  );
}
