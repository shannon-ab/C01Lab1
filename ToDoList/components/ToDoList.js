import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AddTask from './AddTask';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

const ToDoList = ({ initialValues }) => {
    const [todos, setTodos] = useState(initialValues.map((value) => ({ id: uuidv4(), title: value })));
  
    const addToDo = (newTitle) => {
        const newToDo = {
            id: uuidv4(),
            title: newTitle
        };
        setTodos(prevTodos => [...prevTodos, newToDo]);
    };
    
    const removeToDo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    return (
      <View style={styles.toDoListContainer}>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.todoItem}>
          <Text style={styles.text}>{todo.title}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Remove" onPress={() => removeToDo(todo.id)} />
          </View>
        </View>
      ))}
      <AddTask onAddTask={addToDo} />
    </View>
    );
  };

  ToDoList.defaultProps = {
    initialValues: [],
  };
  
  
  const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
    },
});
  
export default ToDoList;