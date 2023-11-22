import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
//import {addTask, deleteTask, editTask, completeTask} from './todoActions';
import {
  addTask,
  deleteTask,
  editTask,
  completeTask,
} from './src/actions/todoActions';

const TodoApp = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = React.useState('');
  const [editIndex, setEditIndex] = React.useState(-1);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      if (editIndex !== -1) {
        dispatch(editTask(editIndex, task));
        setEditIndex(-1);
      } else {
        dispatch(addTask(task));
      }
      setTask('');
    }
  };

  const handleCompleteTask = id => {
    dispatch(completeTask(id));
  };

  const handleEditTask = index => {
    // if (editIndex !== -1) {
    //   dispatch(editTask(tasks[editIndex].id, task));
    //   setEditIndex(-1);
    //   setTask('');
    // }
    setTask(tasks[index].text);
    setEditIndex(index);
  };

  const handleRemoveTask = id => {
    dispatch(deleteTask(id));
  };

  const renderItem = ({item, index}) => (
    <View style={styles.task}>
      <Text
        style={[
          styles.itemList,
          item.completed && {textDecorationLine: 'line-through', color: 'gray'},
        ]}>
        {item.text}
      </Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity
          onPress={() => handleCompleteTask(item.id)}
          disabled={item.completed}>
          <Text
            style={[
              styles.completeButton,
              item.completed ? {color: 'gray'} : {color: 'green'},
            ]}>
            {item.completed ? '' : 'Complete'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          {/* <Text style={styles.editButton}>Edit</Text> */}
          <AntIcon name="edit" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveTask(item.id)}>
          {/* <Text style={styles.removeButton}>Remove</Text> */}
          <AntIcon name="delete" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My To Do List</Text>
      <Text style={styles.title}>Please Enter Your Tasks Below</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter To Do....."
        placeholderTextColor="white"
        value={task}
        onChangeText={text => setTask(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>
          {editIndex !== -1 ? 'Update Task' : 'Add Task'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        extraData={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    //marginTop: 40,
    backgroundColor: 'brown',
    rowGap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  heading: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 30,
    color: 'white',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 3,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    marginTop: 15,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    fontSize: 18,
  },
  itemList: {
    fontSize: 19,
    color: 'white',
    width: '35%',
  },
  taskButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  completeButton: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
  editButton: {
    color: 'pink',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 10,
    marginLeft: 10,
  },
  removeButton: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 10,
  },
});
