import React, { useEffect } from "react";
import { createTask } from "../action";
import "./task-form.css";
import { disableTaskPopup, updateTask } from "../action";

const TaskForm = (props) => {
  useEffect(() => {
    return () => {
      console.log("cleanup");
    };
  }, []);
  const createTaskHandler = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    if (formData.get("id")) {
      console.log("id found");
      props.dispatch(
        updateTask({
          id: formData.get("id"),
          title: formData.get("title"),
          description: formData.get("description"),
          status: formData.get("status"),
        })
      );
    } else
      props.dispatch(
        createTask({
          title: formData.get("title"),
          description: formData.get("description"),
        })
      );
    closeDialogHandler();
  };

  const closeDialogHandler = () => {
    props.dispatch(disableTaskPopup());
  };

  return (
    <div className="task-form__container">
      <form id="task-form" onSubmit={createTaskHandler}>
        {props?.selectedTask?.id && (
          <div className="task-form-row">
            <label htmlFor="id">Id</label>
            <input
              type="text"
              id="id"
              name="id"
              defaultValue={props?.selectedTask?.id}
            ></input>
          </div>
        )}
        <div className="task-form-row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={props?.selectedTask?.title}
          ></input>
        </div>
        <div className="task-form-row">
          <label htmlFor="description">Task Details</label>
          <textarea
            id="description"
            name="description"
            defaultValue={props?.selectedTask?.description}
          ></textarea>
        </div>
        {props?.selectedTask?.status && (
          <div className="task-form-row">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              defaultValue={props?.selectedTask?.status}
            >
              <option value="Unstarted">Unstarted</option>
              <option value="Inprogress">Inprogress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        )}
        <div className="task-form-row">
          <button type="submit"> Save</button>
          <button onClick={closeDialogHandler}> Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
