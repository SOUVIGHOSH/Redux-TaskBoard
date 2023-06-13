let id = 1;
export function uniqueId() {
  return id++;
}

export function createTask(task) {
  console.log(task);
  return {
    type: "CREATE_TASK",
    payload: {
      id: uniqueId(),
      title: task.title,
      status: "Unstarted",
      description: task.description,
    },
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
