import { useDispatch } from "react-redux";
import { addNewTodo } from "../../features/todoSlice";
import { useState } from "react";
import "./ToDoList.css";
import RenderToDos from "../RenderTodos/RenderToDos";
const ToDoList = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const canSave = [task].every(Boolean) && addRequestStatus === "idle";

  const onAddTodoClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        await dispatch(addNewTodo(task));
        setTask("");
      } catch (err) {
        console.error("Failed to save the post: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };
  return (
    <>
      {RenderToDos()}
      <div className="todo-interractions">
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button onClick={onAddTodoClicked}>Add new Task</button>
      </div>
    </>
  );
};
export default ToDoList;
