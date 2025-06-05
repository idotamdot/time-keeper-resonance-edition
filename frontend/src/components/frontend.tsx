import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  priority: string;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch("http://localhost:3000/api/tasks");
      const data = await res.json();
      setTasks(data);
    }

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Your Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> – {task.priority}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// This component fetches tasks from the API and displays them in a list.
// It uses the useEffect hook to fetch tasks when the component mounts.
// The tasks are stored in the state using useState.
// If there are no tasks, it shows a message prompting the user to add one.