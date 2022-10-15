import { CardSquaredTop, TextBold, Divider } from "../atoms";
import "./TaskBar.css";
import { TaskList } from "./TaskList";

export const TaskBar = ({ tasks }) => {
  return (
    <CardSquaredTop className="TaskCard">
      <div className="TaskHeader">
        <TextBold>YOUR TASKS</TextBold>
      </div>
      <Divider />
      <TaskList className="TaskListComponent" tasks={tasks} />
    </CardSquaredTop>
  );
};
