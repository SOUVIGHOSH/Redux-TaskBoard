import "./App.css";
import Task from "./page/task-page";
import { connect } from "react-redux";
import TaskForm from "./page/task-form";

function App(props) {
  return (
    <div className="app-main">
      <h1>Development Project TaskBoard</h1>
      <main>
        <Task
          taskList={props.tasks}
          enable_popup={props.enable_popup}
          dispatch={props.dispatch}
        />
        {props.enable_popup && (
          <TaskForm selectedTask={props.selected} dispatch={props.dispatch} />
        )}
      </main>
    </div>
  );
}

function mapStateToProp(state) {
  return {
    tasks: state.tasks,
    enable_popup: state.task_popup,
    selected: state.selected_task,
  };
}

export default connect(mapStateToProp)(App);
