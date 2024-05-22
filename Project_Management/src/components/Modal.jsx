import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button.jsx";

const Modal = React.forwardRef(function Modal(props, ref) {
  const dialogRef = React.useRef();

  React.useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return ReactDOM.createPortal(
    <dialog
      ref={dialogRef}
      className="rounded-md p-4 shadow-md backdrop:bg-stone-900/90"
    >
      {props.children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{props.buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
