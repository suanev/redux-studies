import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {addTodo, setTodoText, updateTodo} from '../actions';
import Button from './Button';
import Input from './Input';

class TodoForm extends Component {
  onChangeText(value) {
    this.props.dispatchSetTodoText(value);
  }

  onPress() {
    const {todo} = this.props;
    if (todo.id) {
      return this.props.dispatchUpdateTodo(todo);
    }

    const {value} = todo;
    this.props.dispatchAddTodo(value);
  }

  render() {
    const {value, id} = this.props.todo;
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={(text) => this.onChangeText(text)}
            value={value}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.onPress()} isNewTodo={id} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.editingTodo,
  };
};

export default connect(mapStateToProps, {
  dispatchAddTodo: addTodo,
  dispatchSetTodoText: setTodoText,
  dispatchUpdateTodo: updateTodo,
})(TodoForm);

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 4,
  },
  buttonContainer: {
    flex: 1,
  },
});
