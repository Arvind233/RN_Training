// ModalFile.js
// import React, {useState} from 'react';
// import {
//   Modal,
//   View,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
// } from 'react-native';

// const ModalFile = ({isVisible, onClose, onAddUser}) => {
//   const [username, setUsername] = useState('');
//   const [hobbies, setHobbies] = useState([{hobby: ''}]);

//   const handleAddHobby = () => {
//     setHobbies([...hobbies, {hobby: ''}]);
//   };

//   const handleSaveUser = () => {
//     onAddUser({username, hobbies});
//     onClose();
//   };

//   return (
//     <Modal visible={isVisible} animationType="slide">
//       <View style={styles.container}>
//         <Text style={{fontSize: 40, marginBottom: 10, marginLeft: 80}}>
//           Add User
//         </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Your Name"
//           value={username}
//           onChangeText={text => setUsername(text)}
//         />
//         {hobbies.map((hobby, index) => (
//           <View style={styles.hobbiesContainer} key={index}>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Your Hobbies"
//               value={hobby.hobby}
//               onChangeText={text => {
//                 const updatedHobbies = [...hobbies];
//                 updatedHobbies[index].hobby = text;
//                 setHobbies(updatedHobbies);
//               }}
//             />
//             {index === hobbies.length - 1 && (
//               <TouchableOpacity
//                 onPress={handleAddHobby}
//                 style={styles.addButton}>
//                 <Text style={styles.buttonText}>Add</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         ))}

//         <TouchableOpacity onPress={handleSaveUser} style={styles.saveButton}>
//           <Text style={styles.buttonText}>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </Modal>
//   );
// };

// export default ModalFile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   input: {
//     height: 40,
//     width: 300,
//     borderRadius: 15,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: 'rgb(220,220,220)',
//   },
//   hobbiesContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   addButton: {
//     backgroundColor: 'black',
//     borderRadius: 10,
//     marginLeft: 10,
//     padding: 5,
//     marginBottom: 8,
//   },
//   hobbyText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   saveButton: {
//     backgroundColor: 'blue',
//     borderRadius: 100,
//     alignItems: 'center',
//     width: 355,
//     paddingVertical: 5,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     alignSelf: 'center',
//   },
// });

// import {
//   View,
//   Text,
//   Modal,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import {React, useState} from 'react';

// export default function UserModal({visible, onClose, onData}) {
//   const [modalData, setModalData] = useState({
//     username: 'Rahul',
//     hobbies: [
//       {no: 1, name: 'Playing Cricket'},
//       {no: 2, name: 'Playing Video Games'},
//       {no: 3, name: 'Tracking'},
//     ],
//   });

//   const saveData = () => {
//     onClose();
//     onData(modalData);
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
//               // backgroundColor: 'red',
//             }}>
//             User Hobbies:
//           </Text>
//         </View>
//         <TextInput placeholder="Enter Name"></TextInput>
//         <TextInput placeholder="Enter Hobbies"></TextInput>

//         <View style={{}}>
//           <TouchableOpacity
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderRadius: 20,
//               padding: 10,
//               // backgroundColor: 'green',
//             }}
//             onPress={saveData}>
//             <Text>Save</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// }

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
//     username: 'Rahul',
//     hobbies: [
//       {no: 1, name: 'Playing Cricket'},
//       {no: 2, name: 'Playing Video Games'},
//       {no: 3, name: 'Tracking'},
//     ],
//   });

//   const saveData = () => {
//     onClose();
//     onData(modalData);
//   };

//   const handleUsernameChange = text => {
//     setModalData(prevData => Object.assign({}, prevData, {username: text}));
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
//           placeholder="Enter Name"
//           onChangeText={handleUsernameChange}
//           value={modalData.username}
//         />
//         <TextInput placeholder="Enter Hobbies"></TextInput>

//         <View style={{}}>
//           <TouchableOpacity
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderRadius: 20,
//               padding: 10,
//             }}
//             onPress={saveData}>
//             <Text>Save</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// }

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

// import React, {useState} from 'react';
// import {
//   Modal,
//   View,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
// } from 'react-native';

// const ModalFile = ({isVisible, onClose, onAddUser, closeModal}) => {
//   const [username, setUsername] = useState('');
//   const [hobbies, setHobbies] = useState([{hobby: ''}]);

//   const handleAddHobby = () => {
//     setHobbies([...hobbies, {hobby: ''}]);
//   };

//   const handleSaveUser = () => {
//     const updatedHobbies = hobbies || [];
//     onAddUser(username, updatedHobbies);
//     onClose();
//   };

//   return (
//     <Modal visible={isVisible} animationType="slide">
//       <View style={styles.container}>
//         <Text style={{fontSize: 40, marginBottom: 10, marginLeft: 80}}>
//           Add User
//         </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Your Name"
//           value={username}
//           onChangeText={text => setUsername(text)}
//         />
//         {hobbies.map((hobby, index) => (
//           <View style={styles.hobbiesContainer} key={index}>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Your Hobbies"
//               value={hobby.hobby}
//               onChangeText={text => {
//                 const updatedHobbies = [...hobbies];
//                 updatedHobbies[index].hobby = text;
//                 setHobbies(updatedHobbies);
//               }}
//             />
//             {index === hobbies.length - 1 && (
//               <TouchableOpacity
//                 onPress={handleAddHobby}
//                 style={styles.addButton}>
//                 <Text style={styles.buttonText}>Add</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         ))}

//         <TouchableOpacity onPress={handleSaveUser} style={styles.saveButton}>
//           <Text style={styles.buttonText}>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </Modal>
//   );
// };

// export default ModalFile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   input: {
//     height: 40,
//     width: 300,
//     borderRadius: 15,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: 'rgb(220,220,220)',
//   },
//   hobbiesContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   addButton: {
//     backgroundColor: 'black',
//     borderRadius: 10,
//     marginLeft: 10,
//     padding: 5,
//     marginBottom: 8,
//   },

//   saveButton: {
//     backgroundColor: 'blue',
//     borderRadius: 100,
//     alignItems: 'center',
//     width: 355,
//     paddingVertical: 5,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     alignSelf: 'center',
//   },
// });

// ModalFile.js

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
