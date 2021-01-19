export const ADD_TODO = 'ADD_TODO';

export const addTodo = (value) => ({
  type: ADD_TODO,
  value,
});

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleTodo = (todoID) => ({
  type: TOGGLE_TODO,
  todoID,
});

export const SET_TODO_TEXT = 'SET_TODO_TEXT';

export const setTodoText = (value) => ({
  type: SET_TODO_TEXT,
  value,
});

export const SET_EDITING_TODO = 'SET_EDITING_TODO';

export const setEditingTodo = (todo) => ({
  type: SET_EDITING_TODO,
  todo,
});

export const UPDATE_TODO = 'UPDATE_TODO';

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  todo,
});
