import {
  ADD_TODO,
  SET_EDITING_TODO,
  SET_TODO_TEXT,
  UPDATE_TODO,
} from '../actions';

const INITIAL_STATE = {
  id: null,
  value: '',
  done: false,
};

const editingListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TODO_TEXT:
      return {
        ...state,
        value: action.value,
      };
    case ADD_TODO:
    case UPDATE_TODO:
      return INITIAL_STATE;
    case SET_EDITING_TODO:
      return action.todo;
    default:
      return state;
  }
};

export default editingListReducer;
