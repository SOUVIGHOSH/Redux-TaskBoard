import * as api from "../api";

let id = 1;
export function uniqueId() {
  return id++;
}

export function createTask(task) {
  return (dispatch) => {
    api
      .createTask({ ...task, status: "Unstarted" })
      .then((resp) => {
        dispatch(createTaskSucceeded(task));
      })
      .catch((error) => dispatch(createTaskFailed(error)));
  };
}

export function fetchTask() {
  return (dispatch) => {
    api
      .fetchTask()
      .then((resp) => {
        dispatch(fetchTaskSucceeded(resp.data));
      })
      .catch((error) => dispatch(fetchTaskFailed(error)));
  };
}

function createTaskSucceeded(task) {
  return {
    type: "CREATE_TASK_SUCCEDED",
    payload: {
      id: uniqueId(),
      title: task.title,
      status: "Unstarted",
      description: task.description,
    },
  };
}

function fetchTaskSucceeded(tasks) {
  return {
    type: "FECTH_TASK_SUCCEDED",
    payload: tasks,
  };
}

function fetchTaskFailed(error) {
  return {
    type: "FETCH_TASK_FAILED",
    payload: {},
  };
}

function createTaskFailed(task) {
  console.log(task);
  return {
    type: "CREATE_TASK_FAILED",
    payload: {},
  };
}

export function enableTaskPopup() {
  return {
    type: "ENABLE_POPUP",
    payload: {
      task_popup: true,
    },
  };
}

export function disableTaskPopup() {
  return {
    type: "DISABLE_POPUP",
    payload: {
      task_popup: false,
    },
  };
}

export function setTask(task) {
  return {
    type: "SET_TASK",
    payload: task,
  };
}

export function updateTask(task) {
  return {
    type: "UPDATE_TASK",
    payload: task,
    id: task.id,
  };
}
