export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] todoAdd":
      return [...initialState, action.payload];
    case "[TODO] todoRemove":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] todoComplete":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
