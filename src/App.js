import "./App.css";
import { Logo } from "./atoms";
import { BusinessContext } from "./BusinessContext/BusinessContext";
import { TaskBar } from "./TaskBar";

const tasks = [
  { title: "Application Setup", status: "done", context: [{}] },
  { title: "Static Books List", status: "done", context: [{}] },
  { title: "Administration Panel", status: "done", context: [{}] },
  {
    title: "Connect Admin with Frontend",
    status: "active",
    context: [
      {
        title: "New sprint, tasks and intro information.",
        content:
          "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted!  🎉  🙌You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job. Here's the project overview:You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
        author: "Olga Nelson",
        created_at: new Date("Dec 17 2022, 11:40:21"),
        status: "new",
      },
      {
        title: "Application has been accepted! 🎉  🙌",
        content:
          "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted!  🎉  🙌You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job. Here's the project overview:You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
        author: "Kristen Aniston",
        created_at: new Date("Dec 17 2022, 11:20"),
        status: "open",
      },
      {
        title: "New sprint, tasks and intro information.",
        content:
          "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted!  🎉  🙌You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job. Here's the project overview:You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
        author: "Olga Nelson",
        created_at: new Date("Oct 16 2022"),
        status: "old",
      },
    ],
  },
  { title: "Book Review Feature", status: "blocked", context: [{}] },
];

const messages = [
  {
    title: "New sprint, tasks and intro information.",
    content:
      "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted!  🎉  🙌You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job. Here's the project overview:You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
    author: "Olga Nelson",
    created_at: new Date("Dec 17 2022, 11:40:21"),
    status: "new",
  },
  {
    title: "Application has been accepted! 🎉  🙌",
    content:
      "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted!  🎉  🙌You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job. Here's the project overview:You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
    author: "Kristen Aniston",
    created_at: new Date("Dec 17 2022, 11:20"),
    status: "open",
  },
  {
    title: "New sprint, tasks and intro information.",
    content:
      "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted!  🎉  🙌You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job. Here's the project overview:You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
    author: "Olga Nelson",
    created_at: new Date("Oct 16 2022"),
    status: "old",
  },
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <Logo />
      </header>
      <main className="sectionMain">
        <aside className="leftSection">
          <TaskBar tasks={tasks} />
        </aside>
        <section className="rightSection">
          <BusinessContext messages={messages}></BusinessContext>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
