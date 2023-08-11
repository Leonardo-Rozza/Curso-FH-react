export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] todoAdd":
      return [...initialState, action.payload];
    case "[TODO] todoRemove":
      return initialState.filter((todo) => todo.id !== action.payload);
    default:
      return initialState;
  }
};
