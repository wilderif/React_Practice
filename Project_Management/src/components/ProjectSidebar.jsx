import Button from "./Button";

export default function ProjectSidebar(props) {
  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        Your Projects
      </h2>
      <div>
        <Button onClick={props.onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {props.projects.map((project) => {
          return (
            <li key={project.id}>
              <button className="my-1 w-full rounded-sm px-2 py-1 text-left text-stone-400 hover:bg-stone-800 hover:text-stone-200">
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
