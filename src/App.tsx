import Header from "./components/Header";
import CourseImage from "./assets/goals.jpg";
import "./App.css";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
export type CourseGoalType = {
  id: string;
  title: string;
  description: string;
};
function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);
  function handleAddGoal() {
    setGoals(() => {
      const newGoal: CourseGoalType = {
        id: new Date().toISOString(),
        title: "welcome",
        description: "welcome",
      };
      return [...goals, newGoal];
    });
  }
  function handleDeleteGoal(id: string) {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: CourseImage, alt: "a list of goal" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
