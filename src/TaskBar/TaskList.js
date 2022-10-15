import "./TaskList.css";
import { TaskListItem } from "./TaskListItem";

export const TaskList = ({ tasks }) => {
  return (
    <ol className="TaskListContainer">
      {tasks.map((task) => (
        <li>
          <TaskListItem title={task.title} status={task.status} />
        </li>
      ))}
    </ol>
  );
};
