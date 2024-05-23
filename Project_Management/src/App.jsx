import React from "react";

import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = React.useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  console.log(projectState);

  function handleSelectedProject(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProjectId = Math.random();
      const newProject = {
        ...projectData,
        id: newProjectId,
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: newProjectId,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.filter((project) => {
        return project.id !== prevState.selectedProjectId;
      });

      return {
        ...prevState,
        projects: updatedProjects,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddTask(taskData) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        projectId: prevState.selectedProjectId,
        text: taskData,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectState((prevState) => {
      const updatedTasks = prevState.tasks.filter((task) => {
        return task.id !== taskId;
      });
      return {
        ...prevState,
        tasks: updatedTasks,
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancleAddProject={handleCancelAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    const selectedProject = projectState.projects.find((project) => {
      return project.id === projectState.selectedProjectId;
    });
    content = (
      <SelectedProject
        selectedProject={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
      />
    );
  }

  return (
    <main className="my8 flex h-screen gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
