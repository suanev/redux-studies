import {ADD_TODO, TOGGLE_TODO, UPDATE_TODO} from '../actions';

let nextID = 1;

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: nextID++,
        value: action.value,
        done: false,
      };
      return [...state, newTodo];
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.todo.id) {
          return action.todo;
        }
        return todo;
      });
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.todoID) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoListReducer;
