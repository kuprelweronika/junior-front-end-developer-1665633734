import TaskDoneIcon from "./statusIcon/TaskDoneIcon";
import TaskActiveIcon from "./statusIcon/TaskActiveIcon";
import TaskBlockedIcon from "./statusIcon/TaskBlockedIcon";
const ListItem = (title, status) => {
  return (
    <div>
      <p>
        {
          {
            done: <TaskDoneIcon />,
            active: <TaskActiveIcon />,
            blocked: <TaskBlockedIcon />,
          }[title.status]
        }
      </p>
      <p>{title.title}</p>
    </div>
  );
};

export default ListItem;
