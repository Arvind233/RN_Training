
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ModalFile from './ModalFile';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([
    {
      username: 'arvind',
      hobbies: [{ name: 'cricket' }, { name: 'volleyball' }],
    },
    {
      username: 'vaibhav',
      hobbies: [{ name: 'dancing' }, { name: 'singing' }],
    },
  ]);
  console.log('users', users);

  const handleAddUser = (username, hobbies) => {
  const newUser = {
    username,
    hobbies: hobbies.map(hobby => ({ name: hobby.hobby })),
  };
  setUsers(prevUsers => [...prevUsers, newUser]);
  setModalVisible(false);
};


  const addUser = () => {
    setModalVisible(true);
  };

  const showHobbies = ({ item }) => (
    <View style={{ marginLeft: 10 }}>
      <Text style={{ fontSize: 20 }}> {item.name}</Text>
    </View>
  );

  const showUser = ({ item, index }) => (
    <View style={styles.container}>
      <Text style={styles.userInfo}>Name : {item.username}</Text>
      <Text style={{ fontSize: 40, fontFamily: 'Italianno-Regular' }}>Hobbies : -{' '}</Text>
      <FlatList
        data={item.hobbies}
        keyExtractor={(hobby, index) => String(index)}
        renderItem={showHobbies}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}> Welcome </Text>
      <Text style={styles.subHeading}>Please Add Your Name And Hobbies </Text>

      <FlatList
        data={users}
        keyExtractor={(item, index) => String(index)}
        renderItem={showUser}
      />

      <TouchableOpacity onPress={addUser} style={styles.userButton}>
        <Text style={styles.buttonText}>Add More</Text>
      </TouchableOpacity>
      <ModalFile
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddUser={handleAddUser}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderBlockColor: 'green',
    borderEndWidth: 3,
    borderStartWidth: 3,
    // backgroundColor: 'yellow',
    borderRadius: 10,
  },
  mainHeading: {
    fontSize: 40,
    alignSelf: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    // fontFamily: 'VinSans-Regular',
  },
  subHeading: {
    fontSize: 20,
  },

  userButton: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',
    width: 365,
    paddingVertical: 5,
    marginVertical: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;





//modal file

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Modal,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// export default function UserModal({visible, onClose, onData}) {
//   const [modalData, setModalData] = useState({
//     username: '',
//     hobbies: [
//       {name: ''},
//       // {no: 1, name: ''},
//       // {no: 2, name: ''},
//       // {no: 3, name: 'Tracking'},
//     ],
//   });

//   const saveData = () => {
//     onClose();
//     onData(modalData);
//   };

//   const handleUsernameChange = text => {
//     setModalData(prevData => Object.assign({}, prevData, {username: text}));
//   };

//   const handleHobbiesChange = (index, text) => {
//     setModalData(prevData => {
//       const newHobbies = [...prevData.hobbies];
//       newHobbies[index] = {no: index + 1, name: text};
//       return Object.assign({}, prevData, {hobbies: newHobbies});
//     });
//   };

//   return (
//     <Modal animationType="slide" visible={visible}>
//       <View style={{padding: 10}}>
//         <View>
//           <Text
//             style={{
//               fontSize: 45,
//               textAlign: 'center',
//               color: 'green',
//               fontFamily: 'Lugrasimo-Regular',
//             }}>
//             User Hobbies:
//           </Text>
//         </View>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Name"
//           onChangeText={handleUsernameChange}
//           value={modalData.username}
//         />
//         {modalData.hobbies.map((hobby, index) => (
//           <TextInput
//             style={styles.input}
//             key={index}
//             placeholder={`Enter Hobby ${index + 1}`}
//             onChangeText={text => handleHobbiesChange(index, text)}
//             value={hobby.name}
//           />
//         ))}

//         <TouchableOpacity onPress={saveData} style={styles.saveButton}>
//           <Text style={styles.buttonText}>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </Modal>
//   );
// }
// const styles = StyleSheet.create({
//   input: {
//     padding: 10,
//     width: '100%',
//     borderWidth: 2,
//     margin: 5,
//   },
//   saveButton: {
//     backgroundColor: 'blue',
//     borderRadius: 100,
//     alignItems: 'center',
//     width: '100%',
//     paddingVertical: 5,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });


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
  const [username, setUsername] = useState('');
  const [hobbies, setHobbies] = useState([{hobby: ''}]);

  const handleAddHobby = () => {
    setHobbies([...hobbies, {hobby: ''}]);
  };

  const handleSaveUser = () => {
  const updatedHobbies = hobbies || []; // Ensure hobbies is defined
  onAddUser(username, updatedHobbies);
  onClose();
};


  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <Text style={{fontSize: 40, marginBottom: 10, marginLeft: 80}}>
          Add User
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        {hobbies.map((hobby, index) => (
          <View style={styles.hobbiesContainer} key={index}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Hobbies"
              value={hobby.hobby}
              onChangeText={text => {
                const updatedHobbies = [...hobbies];
                updatedHobbies[index].hobby = text;
                setHobbies(updatedHobbies);
              }}
            />
            {index === hobbies.length - 1 && (
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

export default ModalFile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
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
