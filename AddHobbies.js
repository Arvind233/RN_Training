// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   Button,
//   FlatList,
//   Modal,
//   Alert,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
// // import AntIcon from 'react-native-vector-icons/AntDesign;

// const AddHobbies = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);
//   const [users, setUsers] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [username, setUsername] = useState('');
//   const [hobbies, setHobbies] = useState('');

//   const addUser = () => {
//     if (!username) {
//       Alert.alert('Error', 'Please Enter your Name');
//       return;
//     }
//     if (!hobbies) {
//       Alert.alert('Error', 'Please Enter your Hobies');
//       return;
//     }
//     setUsers([...users, {username, hobbies}]);
//     setModalVisible(false);
//     setUsername('');
//     setHobbies('');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.mainHeading}> Welcome </Text>
//       <Text style={styles.subHeading}>Please Add Your Name And Hobbies </Text>
//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}>
//         <View style={styles.modalContainer}>
//           <TextInput
//             style={styles.input}
//             value={username}
//             onChangeText={text => setUsername(text)}
//             placeholder="Username"
//           />

//           <TextInput
//             style={styles.input}
//             value={hobbies}
//             onChangeText={text => setHobbies(text)}
//             placeholder="Enter Hobbies..."
//           />

//           {/* <Button title="Save" onPress={addUser} /> */}
//           <TouchableOpacity onPress={addUser} style={styles.saveButton}>
//             <Text
//               style={{
//                 color: 'white',
//                 fontSize: 25,
//                 fontWeight: 'bold',
//               }}>
//               Save
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>

//       <FlatList
//         data={users}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) => (
//           <View style={styles.userContainer}>
//             <Text style={styles.userInfo}>Username: {item.username}</Text>
//             <Text style={styles.userInfo}>Hobbies: {item.hobbies}</Text>
//           </View>
//         )}
//       />
//       <TouchableOpacity
//         onPress={() => setModalVisible(true)}
//         style={styles.userButton}>
//         <Text
//           style={{
//             color: 'white',
//             fontSize: 25,
//             fontWeight: 'bold',
//           }}>
//           Add Your Name And Hobbies
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   mainHeading: {
//     fontSize: 40,
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     fontFamily: 'VinSans-Regular',
//   },
//   subHeading: {
//     fontSize: 20,
//   },
//   modalContainer: {
//     marginTop: 50,
//     paddingHorizontal: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     width: 300,
//     borderRadius: 15,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: 'rgb(220,220,220)',
//   },
//   userContainer: {
//     marginTop: 10,
//     marginBottom: 10,

//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingBottom: 10,
//   },
//   userInfo: {
//     fontSize: 16,
//   },
//   userButton: {
//     backgroundColor: 'blue',
//     borderRadius: 100,
//     alignItems: 'center',
//     width: 400,
//     paddingVertical: 5,
//     marginVertical: 10,
//   },
//   saveButton: {
//     backgroundColor: 'blue',
//     borderRadius: 100,
//     alignItems: 'center',
//     width: 300,
//     paddingVertical: 5,
//     marginVertical: 10,
//   },
// });

// export default AddHobbies;
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Modal,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const AddHobbies = () => {
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
    setUsers([...users, {username, hobbies: userHobbies.join(', ')}]);
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

          {userHobbies.map((hobby, index) => (
            <Text key={index} style={styles.hobbyText}>
              {hobby}
            </Text>
          ))}

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
            <Text style={styles.userInfo}>Hobbies: {item.hobbies}</Text>
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

export default AddHobbies;

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Button,
//   FlatList,
//   Modal,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import AntIcon from 'react-native-vector-icons/AntDesign';

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [username, setUsername] = useState('');
//   const [hobbies, setHobbies] = useState('');
//   const [currentHobby, setCurrentHobby] = useState('');
//   const [userIndex, setUserIndex] = useState(null);

//   const addUser = () => {
//     if (userIndex !== null) {
//       // Update existing user
//       const updatedUsers = [...users];
//       updatedUsers[userIndex].hobbies.push(currentHobby);
//       setUsers(updatedUsers);
//       setUserIndex(null);
//     } else {
//       // Add new user
//       setUsers([...users, {username, hobbies: [currentHobby]}]);
//     }

//     setModalVisible(false);
//     setUsername('');
//     setHobbies('');
//     setCurrentHobby('');
//   };

//   const addHobby = () => {
//     if (currentHobby) {
//       setHobbies([...hobbies, currentHobby]);
//       setCurrentHobby('');
//     }
//   };

//   const editUser = index => {
//     const userToEdit = users[index];
//     setUsername(userToEdit.username);
//     setHobbies(userToEdit.hobbies.join(', '));
//     setUserIndex(index);
//     setModalVisible(true);
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Add User" onPress={() => setModalVisible(true)} />

//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}>
//         <View style={styles.modalContainer}>
//           <Text style={styles.label}>Enter Username:</Text>
//           <TextInput
//             style={styles.input}
//             value={username}
//             onChangeText={text => setUsername(text)}
//             placeholder="Username"
//           />

//           <Text style={styles.label}>Enter Hobbies</Text>
//           <View style={styles.hobbiesContainer}>
//             <TextInput
//               style={[styles.input, styles.hobbiesInput]}
//               value={currentHobby}
//               onChangeText={text => setCurrentHobby(text)}
//               placeholder="Hobbies"
//             />
//             <TouchableOpacity onPress={addHobby}>
//               <AntIcon
//                 name="pluscircleo"
//                 size={24}
//                 color="blue"
//                 style={styles.plusIcon}
//               />
//             </TouchableOpacity>
//           </View>

//           <Button title="Save" onPress={addUser} />
//         </View>
//       </Modal>

//       <FlatList
//         data={users}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item, index}) => (
//           <View style={styles.userContainer}>
//             <Text style={styles.userInfo}>Username: {item.username}</Text>
//             <Text style={styles.userInfo}>
//               Hobbies: {item.hobbies.join(', ')}
//             </Text>
//             <Button title="Edit" onPress={() => editUser(index)} />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   modalContainer: {
//     marginTop: 50,
//     paddingHorizontal: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   hobbiesContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   hobbiesInput: {
//     flex: 1,
//   },
//   plusIcon: {
//     marginLeft: 10,
//   },
//   userContainer: {
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingBottom: 10,
//   },
//   userInfo: {
//     fontSize: 16,
//   },
// });

// export default App;
