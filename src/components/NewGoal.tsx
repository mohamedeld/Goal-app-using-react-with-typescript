import { FormEvent, useRef } from "react";
import { CourseGoalType } from "../App";
interface NewGoalProp {
  onAddCourseGoal: (data: CourseGoalType) => void;
}
export default function NewGoal({ onAddCourseGoal }: NewGoalProp) {
  const goal = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  function handleAddGoal(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredDescription = description.current!.value;
    if (!goal && !description) return;
    const newData: CourseGoalType = {
      id: new Date().toISOString(),
      title: enteredGoal,
      description: enteredDescription,
    };
    e.currentTarget.reset();
    onAddCourseGoal(newData);
  }

  return (
    <form onSubmit={handleAddGoal}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" ref={goal} name="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" ref={description} name="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
