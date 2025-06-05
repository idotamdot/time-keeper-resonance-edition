interface Task {
  id: number;
  title: string;
  priority: string;
}

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  onComplete: (taskTitle: string) => void;
}

export function TaskList({ tasks, setTasks, onComplete }: TaskListProps) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => {
        const colors =
          task.priority === "High"
            ? {
                bg: "linear-gradient(135deg, #fff0e6, #ffcccb)",
                shadow: "0 0 15px rgba(255, 115, 0, 0.5)",
                emoji: "🔥",
              }
            : task.priority === "Medium"
            ? {
                bg: "linear-gradient(135deg, #f0f8ff, #e6e6fa)",
                shadow: "0 0 15px rgba(170, 170, 255, 0.4)",
                emoji: "🌟",
              }
            : {
                bg: "linear-gradient(135deg, #e6fff5, #f5fff0)",
                shadow: "0 0 15px rgba(144, 238, 144, 0.3)",
                emoji: "🌱",
              };

        return (
          <li
            key={task.id}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              borderRadius: "1rem",
              background: colors.bg,
              boxShadow: colors.shadow,
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              position: "relative",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 25px rgba(255, 255, 255, 0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = colors.shadow;
            }}
          >
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {colors.emoji} {task.title}
            </span>
            <div style={{ fontSize: "0.9rem", marginTop: "0.3rem", color: "#444" }}>
              Priority: <strong>{task.priority}</strong>
            </div>

            <button
              onClick={() => {
                // Sparkle
                const el = document.createElement("div");
                el.innerText = "✨";
                el.style.position = "absolute";
                el.style.left = "50%";
                el.style.top = "50%";
                el.style.transform = "translate(-50%, -50%)";
                el.style.fontSize = "2rem";
                el.style.pointerEvents = "none";
                el.style.zIndex = "9999";
                el.style.animation = "pop 0.7s ease-out forwards";
                (document.body || document.documentElement).appendChild(el);
                setTimeout(() => el.remove(), 700);

                // Remove from list and add star
                onComplete(task.title);
                setTasks((prev) => prev.filter((t) => t.id !== task.id));
              }}
              style={{
                marginTop: "0.5rem",
                backgroundColor: "#c8facc",
                padding: "0.3rem 0.8rem",
                borderRadius: "6px",
                border: "1px solid #4caf50",
                fontSize: "0.85rem",
                cursor: "pointer",
              }}
            >
              ✅ Complete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
