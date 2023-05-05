import Input from "../Input/Input";
import { Component } from "react";
import "./Form.css";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
    this.taskList = [];
  }
  handleSetNewTask = (event) => {
    this.setState({ task: event.target.value });
  };
  handleAddTask = () => {
    this.taskList.push(this.state.task);
  };
  toggleTask = (event) => {
    event.target.className === "undone"
      ? (event.target.className = "done")
      : (event.target.className = "undone");
  };
  renderTask = () => {
    return (
      <ul>
        {this.taskList.map((elem, index) => (
          <li className="undone" key={index} onClick={this.toggleTask}>
            {elem}
          </li>
        ))}
      </ul>
    );
  };
  render() {
    return (
      <div>
        <h1>Your tasks for today</h1>
        {this.renderTask()}
        <Input
          className="input-tasks"
          name="task"
          type="text"
          value={this.state.task}
          handleChange={this.handleSetNewTask}
        />
        <button onClick={this.handleAddTask}>Set new task</button>
      </div>
    );
  }
}
export default Form;
