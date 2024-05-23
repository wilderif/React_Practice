import NewTask from "./NewTask.jsx";

export default function Tasks(props) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h2>
      <NewTask onAdd={props.onAdd} />
      {props.tasks.length === 0 ? (
        <p className="my-4 text-stone-800">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="mt-8 rounded-md bg-stone-100 p-4">
          {props.tasks.map((task) => {
            return (
              <li key={task.id} className="my-4 flex justify-between">
                <span>{task.text}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => {
                    props.onDelete(task.id);
                  }}
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
