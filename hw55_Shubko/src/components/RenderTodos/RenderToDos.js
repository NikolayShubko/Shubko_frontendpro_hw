import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, fetchTodos } from "../../features/todoSlice";
function RenderToDos() {
  const todos = useSelector((state) => state.todo.todos);
  const todosStatus = useSelector((state) => state.todo.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todosStatus === "idle") {
      dispatch(fetchTodos());
    }
  }, [todosStatus, dispatch]);
  const handleTodoDone = (id) => {
    dispatch(deleteToDo(id));
  };
  if (todosStatus === "loading") {
    return <div>Loading...</div>;
  }
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
    </>
  );
}

export default RenderToDos;
