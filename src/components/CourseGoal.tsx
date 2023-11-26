interface CourseGoalProps {
  id: string;
  title: string;
  description: string;
  onDelete: (id: string) => void;
}
export default function CourseGoal({
  id,
  title,
  description,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>delete</button>
    </article>
  );
}
