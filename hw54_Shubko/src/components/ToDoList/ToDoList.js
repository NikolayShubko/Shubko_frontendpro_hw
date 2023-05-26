import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../../features/todoSlice";
import { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const addTask = () => {
    dispatch(addTodo(task));
  };
  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li
              className="todo"
              onClick={() => handleTodoDone(todo.id)}
              id={todo.id}
              key={todo.id}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-list">Add some tasks</div>
      )}
      <div className="todo-interractions">
        <input type="text" onChange={(event) => setTask(event.target.value)} />
        <button onClick={addTask}>Add new Task</button>
      </div>
    </>
  );
};
export default ToDoList;
