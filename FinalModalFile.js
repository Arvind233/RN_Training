import React, {useState} from 'react';
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const ModalFile = ({isVisible, onClose, onAddUser}) => {
  const [userData, setUserData] = useState({
    username: '',
    hobbies: [{hobby: ''}],
  });

  const handleAddHobby = () => {
    setUserData(prevData => ({
      ...prevData,
      hobbies: [...prevData.hobbies, {hobby: ''}],
    }));
  };

  const handleSaveUser = () => {
    const updatedHobbies = userData.hobbies || [];
    const userObject = {
      username: userData.username,
      hobbies: updatedHobbies.map(hobby => ({name: hobby.hobby})),
    };
    setUserData({username: '', hobbies: [{hobby: ''}]});
    onAddUser(userObject);
    onClose();
    console.log('updated hobbies', updatedHobbies);
    console.log('userobject', userObject);
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <Text style={{fontSize: 40, marginBottom: 10, marginLeft: 80}}>
          Add User
        </Text>
        <TextInput
          style={styles.userinput}
          placeholder="Enter Your Name"
          value={userData.username}
          onChangeText={text =>
            setUserData(prevData =>
              Object.assign({}, prevData, {username: text}),
            )
          }
        />
        {userData.hobbies.map((hobby, index) => (
          <View style={styles.hobbiesContainer} key={index}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Hobbies"
              value={hobby.hobby}
              onChangeText={text => {
                const updatedHobbies = [...userData.hobbies];
                updatedHobbies[index].hobby = text;
                setUserData(prevData =>
                  Object.assign({}, prevData, {hobbies: updatedHobbies}),
                );
              }}
            />
            {index === userData.hobbies.length - 1 && (
              <TouchableOpacity
                onPress={handleAddHobby}
                style={styles.addButton}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
        <TouchableOpacity onPress={handleSaveUser} style={styles.saveButton}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  userinput: {
    height: 40,
    width: 350,
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
    alignSelf: 'center',
  },
});

export default ModalFile;
