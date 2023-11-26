import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import CourseImage from "./assets/goals.jpg";
import "./App.css";

function App() {
  return (
    <main>
      <Header image={{ src: CourseImage, alt: "a list of goal" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="welcome" description="welcome" />
    </main>
  );
}

export default App;
