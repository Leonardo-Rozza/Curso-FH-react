import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    todoCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleNewTodo,
    handleTodoComplete,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp ({todoCount}) <small>pendientes: {pendingTodosCount}</small>
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
