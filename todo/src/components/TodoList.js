import React from 'react';
import {View} from 'react-native';

import {connect} from 'react-redux';
import {toggleTodo, setEditingTodo} from '../actions';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, dispatchToggleTodo, dispatchSetEditingTodo}) => {
  return (
    <View>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onPressTodo={() => dispatchToggleTodo(todo.id)}
          onLongPressTodo={() => dispatchSetEditingTodo(todo)}
        />
      ))}
    </View>
  );
};

const mapStateToProps = (state) => {
  const {todos} = state;
  return {todos};
};

export default connect(mapStateToProps, {
  dispatchToggleTodo: toggleTodo,
  dispatchSetEditingTodo: setEditingTodo,
})(TodoList);
