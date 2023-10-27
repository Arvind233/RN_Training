import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, {text: task, iscompleted: false}]);
      setTask('');
    } else {
      Alert.alert('Please Enter Any Tasks');
    }
  };

  const handleCompleteTask = index => {
    const updatedTasks = [...tasks];
    updatedTasks[index].iscompleted = !updatedTasks[index].iscompleted;
    setTasks(updatedTasks);
  };

  const renderItem = ({item, index}) => (
    <View style={styles.task}>
      <Text
        style={[
          styles.itemList,
          item.iscompleted && {
            textDecorationLine: 'line-through',
            color: 'gray',
          },
        ]}>
        {item.text}
      </Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity
          onPress={() => handleCompleteTask(index)}
          disabled={item.iscompleted}>
          <Text
            style={[
              styles.completeButton,
              item.iscompleted ? {color: 'black'} : {color: 'green'},
            ]}>
            {item.iscompleted ? '' : 'Complete'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('./images/bg16.png')}
        style={{flex: 1}}
        resizeMode="cover">
        <View style={styles.container}>
          <Text style={styles.heading}>MY TO DO LIST</Text>
          <Text style={styles.title}>Please Enter Your Tasks Below!!</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter To Do...."
            placeholderTextColor={'black'}
            value={task}
            onChangeText={text => setTask(text)}
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.addButtonText}>Add Task</Text>
          </TouchableOpacity>

          <Text style={styles.headingText}>All Tasks are listed below :</Text>

          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    //marginTop: 40,
    //backgroundColor: 'blue',
    rowGap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#001965',
    alignSelf: 'center',
    fontFamily: 'Poppins',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 25,
    color: 'black',
  },
  addButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    borderWidth: 2,
    marginTop: 15,
  },
  addButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
    textShadowColor: 'green',
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    fontSize: 18,
  },
  itemList: {
    fontSize: 23,
    width: '60%',
    color: 'black',
  },
  taskButtons: {
    flexDirection: 'row',
  },
  completeButton: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 23,
  },
});

export default App;
