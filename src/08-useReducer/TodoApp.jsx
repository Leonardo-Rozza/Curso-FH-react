import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] todoAdd",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] todoRemove",
      payload: id,
    });
  };

  const handleTodoComplete = (id) => {
    dispatch({
      type: "[TODO] todoComplete",
      payload: id,
    });
  };

  return (
    <>
      <h1>
        TodoApp (10) <small>pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            todoComplete={handleTodoComplete}
          />
        </div>
        <div className="col-6">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
