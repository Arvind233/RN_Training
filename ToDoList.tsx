// import {View, Text, StyleSheet} from 'react-native';
// import React from 'react';

// export default function ToDoList() {
//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.header}>
//         <Text style={{fontSize: 50, fontWeight: 'bold', alignSelf: 'center'}}>
//           My To Do List
//         </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     padding: 10,
//   },
//   header: {
//     backgroundColor: 'red',
//   },
// });

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [completed, setCompleted] = useState(false);

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        //Alert.alert('Please Enter Any tasks ');
      } else {
        setTasks([...tasks, task]);
      }
      setTask('');
    } else {
      Alert.alert('Please Enter Any Tasks');
    }
  };

  const handleCompleteTask = () => {
    setCompleted(!completed);
  };

  const renderItem = ({item, index}) => (
    <View style={styles.task}>
      <Text style={styles.itemList}>{item}</Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity onPress={() => handleCompleteTask(index)}>
          <Text
            style={[
              styles.completeButton,
              {color: completed ? 'skyblue' : 'green'},
            ]}>
            Complete
          </Text>
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
        placeholder="Enter To Do"
        value={task}
        onChangeText={text => setTask(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={index => index.toString()}
      />
    </View>
  );
};

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
  },
  taskButtons: {
    flexDirection: 'row',
  },
  completeButton: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default App;
