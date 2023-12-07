import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Modal,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const DynamicHobby = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [users, setUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [userHobbies, setUserHobbies] = useState([]);

  const addUser = () => {
    if (!username) {
      Alert.alert('Error', 'Please Enter your Name');
      return;
    }
    if (!userHobbies.length) {
      Alert.alert('Error', 'Please Enter your Hobbies');
      return;
    }

    const newUser = {
      username,
      hobbies: userHobbies.map(hobby => ({name: hobby})),
    };

    setUsers([...users, newUser]);
    setModalVisible(false);
    setUsername('');
    setUserHobbies([]);
  };

  const addHobby = () => {
    if (hobbies) {
      setUserHobbies([...userHobbies, hobbies]);
      setHobbies('');
    }
  };

  const handleHobbyChange = (text, index) => {
    const updatedHobbies = [...userHobbies];
    updatedHobbies[index] = {name: text};
    setUserHobbies(updatedHobbies);
  };

  const handleDeleteHobby = index => {
    const updatedHobbies = [...userHobbies];
    updatedHobbies.splice(index, 1);
    setUserHobbies(updatedHobbies);
  };

  const renderHobbies = ({item, index}) => (
    <View style={styles.hobbyContainer}>
      <TextInput
        style={styles.hobbyInput}
        value={item.name}
        onChangeText={text => handleHobbyChange(text, index)}
        placeholder={`Enter Hobby ${index + 1}...`}
      />
      <TouchableOpacity
        onPress={() => handleDeleteHobby(index)}
        style={styles.deleteButton}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}> Welcome </Text>
      <Text style={styles.subHeading}>Please Add Your Name And Hobbies </Text>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Text
            style={{
              fontSize: 30,
              fontStyle: 'italic',
              fontWeight: 'bold',
              alignSelf: 'center',
              marginBottom: 20,
            }}>
            Enter Your Details
          </Text>
          <TextInput
            style={styles.userinput}
            value={username}
            onChangeText={text => setUsername(text)}
            placeholder="Username"
          />

          <View style={styles.hobbiesContainer}>
            <TextInput
              style={styles.input}
              value={hobbies}
              onChangeText={text => setHobbies(text)}
              placeholder="Enter Hobbies..."
            />
            <TouchableOpacity onPress={addHobby} style={styles.addButton}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 20}}>Your Hobbies :- </Text>

          <FlatList
            data={userHobbies}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderHobbies}
          />

          <TouchableOpacity onPress={addUser} style={styles.saveButton}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.userContainer}>
            <Text style={styles.userInfo}>Username: {item.username}</Text>
            <Text style={styles.userInfo}>
              Hobbies: {item.hobbies.map(h => h.name).join(', ')}
            </Text>
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.userButton}>
        <Text style={styles.buttonText}>Add Your Name And Hobbies</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  mainHeading: {
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'VinSans-Regular',
  },
  subHeading: {
    fontSize: 20,
  },
  modalContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  userinput: {
    height: 40,
    width: 355,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  input: {
    height: 40,
    width: 300,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  hobbiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginLeft: 10,
    padding: 5,
    marginBottom: 8,
  },
  hobbyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  hobbyInput: {
    height: 40,
    width: 250,
    borderRadius: 15,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
  },
  hobbyText: {
    fontSize: 16,
    marginBottom: 5,
  },
  userContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  userInfo: {
    fontSize: 16,
  },
  userButton: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',
    width: 400,
    paddingVertical: 5,
    marginVertical: 10,
  },
  saveButton: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',
    width: 355,
    paddingVertical: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DynamicHobby;
