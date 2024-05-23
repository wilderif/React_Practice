import Tasks from "./Tasks.jsx";

export default function SelectedProject(props) {
  const formattedDate = new Date(
    props.selectedProject.dueDate,
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="mt-16 w-[35rem]">
      <header className="mb-4 border-b-2 border-stone-300 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-3xl font-bold text-stone-600">
            {props.selectedProject.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={props.onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="whitespace-pre-wrap text-stone-600">
          {props.selectedProject.description}
        </p>
      </header>
      <Tasks
        onAdd={props.onAddTask}
        onDelete={props.onDeleteTask}
        tasks={props.tasks}
      />
    </div>
  );
}
