import { CourseGoalType } from "../App";
import CourseGoal from "./CourseGoal";
type GoalList = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: string) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: GoalList) {
  return (
    <ul>
      {goals.length > 0 ? (
        goals.map((goal) => {
          return (
            <CourseGoal
              title={goal.title}
              description={goal.description}
              key={goal.id}
              id={goal.id}
              onDelete={onDeleteGoal}
            />
          );
        })
      ) : (
        <p>No Goals Found</p>
      )}
    </ul>
  );
}
