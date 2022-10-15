import "./TaskListItem.css";
import { TaskDoneIcon } from "./TaskDoneIcon";
import { TaskActiveIcon } from "./TaskActiveIcon";
import { TaskBlockedIcon } from "./TaskBlockedIcon";
import { TextBold, Text, TextDimmed } from "../atoms";

export const TaskListItem = ({ title, status }) => {
  return (
    <div className="TaskListItemContainer">
      {status === "active" && (
        <>
          <TaskActiveIcon /> <TextBold>{title}</TextBold>
        </>
      )}

      {status === "done" && (
        <>
          <TaskDoneIcon /> <Text>{title}</Text>
        </>
      )}

      {status === "blocked" && (
        <>
          <TaskBlockedIcon /> <TextDimmed>{title}</TextDimmed>
        </>
      )}
    </div>
  );
};
