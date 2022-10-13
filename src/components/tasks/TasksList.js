import ListItem from "./ListItem";

const TasksList = () => {
  const tasks = [
    { title: "Application Setup", status: "done", context: [{}] },
    { title: "Static Books List", status: "done", context: [{}] },
    { title: "Administration Panel", status: "done", context: [{}] },
    { title: "Connect Admin with Frontend", status: "active", context: [{}] },
    { title: "Book Review Feature", status: "blocked", context: [{}] },
  ];

  return tasks.map((task) => (
    <ListItem title={task.title} status={task.status} />
  ));
};

export default TasksList;
