import {combineReducers} from 'redux';
import editingListReducer from './editingTodoReducer';
import todoListReducer from './todoListReducer';

const rootReducer = combineReducers({
  todos: todoListReducer,
  editingTodo: editingListReducer,
});

export default rootReducer;
