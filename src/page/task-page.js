import React from "react";
import "./task-page.css";
import { enableTaskPopup, setTask, disableTaskPopup } from "../action";

const Task = (props) => {
  console.log(props);
  const status = ["Unstarted", "Inprogress", "Completed"];

  const openDialogHandler = () => {
    props.dispatch(enableTaskPopup());
  };

  const setTaskHandler = (task) => {
    props.dispatch(disableTaskPopup());
    props.dispatch(setTask(task));
    openDialogHandler();
  };
  console.log(props.enable_popup);

  return (
    <>
      {props.enable_popup && <div className="backdrop"></div>}
      <button onClick={openDialogHandler}>New Task</button>
      <div className="task">
        {status.map((status) => (
          <div key={status} className="task-section">
            <div className="task-section__status">{status}</div>
            {props.taskList
              .filter((task) => task.status === status)
              .map((task, id) => (
                <div
                  className="task-section__container"
                  onClick={setTaskHandler.bind(this, task)}
                  key={id}
                >
                  <div className="task-section__card">
                    <h4 className="task-section__card-title">{task.title}</h4>
                    <p className="task-section__card-description">
                      {task.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Task;
