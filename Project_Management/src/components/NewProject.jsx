import React from "react";

import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject(props) {
  const modalRef = React.useRef();

  const titleRef = React.useRef();
  const descriptionRef = React.useRef();
  const dueDateRef = React.useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    props.onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="my-4 text-xl font-bold text-stone-700">Invalid Input</h2>
        <p className="mb-4 text-stone-600">
          Please make sure you provide valid value for every input field.
        </p>
      </Modal>
      <div className="mt-16 w-[35rem]">
        <menu className="my-4 flex items-center justify-end gap-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={props.onCancleAddProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="rounded-md bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea="true" />
          <Input type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
}
