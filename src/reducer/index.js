export default function task_reducer(
  state = { tasks: [], task_popup: false, selected_task: {} },
  action
) {
  console.log(action);
  if (action.type === "FECTH_TASK_SUCCEDED") {
    state = { ...state, tasks: action.payload };
  }
  if (action.type === "CREATE_TASK_SUCCEDED") {
    state = { ...state, tasks: [...state.tasks, action.payload] };
  }
  if (action.type === "ENABLE_POPUP") {
    state = { ...state, ...action.payload };
  }
  if (action.type === "DISABLE_POPUP") {
    state = { ...state, selected_task: {}, ...action.payload };
  }
  if (action.type === "SET_TASK") {
    state = { ...state, selected_task: action.payload };
  }
  if (action.type === "UPDATE_TASK") {
    let index = state.tasks.findIndex((task) => +task.id === +action.id);
    state.tasks.splice(index, 1, { ...action.payload, id: +action.id });
    state = { ...state, selected_task: {}, tasks: [...state.tasks] };
  }
  return state;
}
