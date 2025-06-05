import { useState } from "react";

interface TodayViewProps {
  stars: number;
  intention: string;
  setIntention: (value: string) => void;
}

// 🌞 TodayView Component
export function TodayView({ stars, intention, setIntention }: TodayViewProps) {
  const [energy, setEnergy] = useState("Balanced");

  return (
    <div style={{ background: "linear-gradient(135deg, #e0f7fa, #fce4ec)", padding: "2rem", borderRadius: "1rem" }}>
      <h2>🌞 Today View</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>🌤 Energy Level:</label><br />
        <select value={energy} onChange={(e) => setEnergy(e.target.value)}>
          <option>High</option>
          <option>Balanced</option>
          <option>Low</option>
          <option>Unclear</option>
        </select>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>🧘‍♀️ Intention:</label><br />
        <input
          type="text"
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          placeholder="Focus for today"
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>

      <div>
        <label>⭐ Star Meter:</label>
        <div style={{ fontSize: "1.5rem", marginTop: "0.5rem" }}>
          {"⭐".repeat(stars)}
        </div>
      </div>
    </div>
  );
}
