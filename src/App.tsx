import Header from "./components/Header";
import CourseImage from "./assets/goals.jpg";
import "./App.css";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
export type CourseGoalType = {
  id: string;
  title: string;
  description: string;
};
function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);
  function handleAddGoal(data: CourseGoalType) {
    setGoals((goals) => {
      return [...goals, data];
    });
  }
  function handleDeleteGoal(id: string) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: CourseImage, alt: "a list of goal" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddCourseGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
