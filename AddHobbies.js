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

// const AddHobbies = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);

//   const [users, setUsers] = useState([]);
//   console.log('users', users);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [username, setUsername] = useState('');
//   const [hobbies, setHobbies] = useState('');
//   const [userHobbies, setUserHobbies] = useState([]);
//   console.log('userhobbies', userHobbies);

//   const addUser = () => {
//     if (!username) {
//       Alert.alert('Error', 'Please Enter your Name');
//       return;
//     }
//     if (!userHobbies.length) {
//       Alert.alert('Error', 'Please Enter your Hobbies');
//       return;
//     }
//     setUsers([...users, {username, hobbies: userHobbies.join(', ')}]);
//     setModalVisible(false);
//     setUsername('');
//     setUserHobbies([]);
//   };

//   const addHobby = () => {
//     if (hobbies) {
//       setUserHobbies([...userHobbies, hobbies]);
//       setHobbies('');
//     }
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
//           <Text
//             style={{
//               fontSize: 30,
//               fontStyle: 'italic',
//               fontWeight: 'bold',
//               alignSelf: 'center',
//               marginBottom: 20,
//             }}>
//             Enter Your Details
//           </Text>
//           <TextInput
//             style={styles.userinput}
//             value={username}
//             onChangeText={text => setUsername(text)}
//             placeholder="Username"
//           />

//           <View style={styles.hobbiesContainer}>
//             <TextInput
//               style={styles.input}
//               value={hobbies}
//               onChangeText={text => setHobbies(text)}
//               placeholder="Enter Hobbies..."
//             />
//             <TouchableOpacity onPress={addHobby} style={styles.addButton}>
//               <Text style={styles.buttonText}>Add</Text>
//             </TouchableOpacity>
//           </View>
//           <Text style={{fontSize: 20}}>Your Hobbies :- </Text>

//           {userHobbies.map((hobby, index) => (
//             <Text key={index} style={styles.hobbyText}>
//               {hobby}
//             </Text>
//           ))}

//           <TouchableOpacity onPress={addUser} style={styles.saveButton}>
//             <Text style={styles.buttonText}>Save</Text>
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
//         <Text style={styles.buttonText}>Add Your Name And Hobbies</Text>
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
//   userinput: {
//     height: 40,
//     width: 355,
//     borderRadius: 15,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: 'rgb(220,220,220)',
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
//     width: 355,
//     paddingVertical: 5,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default AddHobbies;

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

// const AddHobbies = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);

//   const [users, setUsers] = useState([
//     {
//       username: 'arvind',
//       userHobbies: [{hobbies: 'cricket'}, {hobbies: 'volleyball'}],
//     },
//     {
//       username: 'vaibhav',
//       userHobbies: [{userHobbies: 'dancing'}, {hobbies: 'singing'}],
//     },
//   ]);
//   console.log('users', users);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [username, setUsername] = useState('');
//   const [hobbies, setHobbies] = useState('');
//   const [userHobbies, setUserHobbies] = useState([]);
//   console.log('userhobbies', userHobbies);

//   const addUser = () => {
//     if (!username) {
//       Alert.alert('Error', 'Please Enter your Name');
//       return;
//     }
//     if (!userHobbies.length) {
//       Alert.alert('Error', 'Please Enter your Hobbies');
//       return;
//     }
//     setUsers([...users, {username, hobbies: userHobbies.join(', ')}]);
//     setModalVisible(false);
//     setUsername('');
//     setUserHobbies([]);
//   };

//   const addHobby = () => {
//     if (hobbies) {
//       setUserHobbies([...userHobbies, hobbies]);
//       setHobbies('');
//     }
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
//           <Text
//             style={{
//               fontSize: 30,
//               fontStyle: 'italic',
//               fontWeight: 'bold',
//               alignSelf: 'center',
//               marginBottom: 20,
//             }}>
//             Enter Your Details
//           </Text>
//           <TextInput
//             style={styles.userinput}
//             value={username}
//             onChangeText={text => setUsername(text)}
//             placeholder="Username"
//           />

//           <View style={styles.hobbiesContainer}>
//             <TextInput
//               style={styles.input}
//               value={hobbies}
//               onChangeText={text => setHobbies(text)}
//               placeholder="Enter Hobbies..."
//             />
//             <TouchableOpacity onPress={addHobby} style={styles.addButton}>
//               <Text style={styles.buttonText}>Add</Text>
//             </TouchableOpacity>
//           </View>
//           <Text style={{fontSize: 20}}>Your Hobbies :- </Text>

//           {userHobbies.map((hobby, index) => (
//             <Text key={index} style={styles.hobbyText}>
//               {hobby}
//             </Text>
//           ))}

//           <TouchableOpacity onPress={addUser} style={styles.saveButton}>
//             <Text style={styles.buttonText}>Save</Text>
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
//         <Text style={styles.buttonText}>Add Your Name And Hobbies</Text>
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
//   userinput: {
//     height: 40,
//     width: 355,
//     borderRadius: 15,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: 'rgb(220,220,220)',
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
//     width: 355,
//     paddingVertical: 5,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default AddHobbies;

// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Modal,
//   Alert,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';

// const AddHobbies = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);
// const [users, setUsers] = useState([
//   {
//     username: 'arvind',
//     hobbies: [{name: 'cricket'}, {name: 'volleyball'}],
//   },
//   {
//     username: 'vaibhav',
//     hobbies: [{name: 'dancing'}, {name: 'singing'}],
//   },
//   {
//     username: 'neeraj',
//     hobbies: [{name: 'playing Video games'}, {name: 'comedy'}],
//   },
// ]);
//   console.log('users', users);

//   const showHobbies = ({item}) => (
//     <View style={{marginLeft: 10}}>
//       <Text style={{fontSize: 20}}> {item.name}</Text>
//     </View>
//   );

//   const showUser = ({item, index}) => (
//     <View style={styles.container}>
//       <Text style={styles.userInfo}>Name : {item.username}</Text>
//       <Text style={{fontSize: 40, fontFamily: 'Italianno-Regular'}}>
//         Hobbies : -{' '}
//       </Text>
//       <FlatList
//         data={item.hobbies}
//         keyExtractor={hobby => hobby.name}
//         renderItem={showHobbies}
//       />
//     </View>
//   );

//   const addOneMore = () => {
//     const user2 = {
//       username: 'yash',
//       hobbies: [{name: 'Traveling'}, {name: 'Cooking'}],
//     };

//     setUsers(prevusers => [...prevusers, user2]);
//     return;
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.mainHeading}> Welcome </Text>
//       <Text style={styles.subHeading}>Please Add Your Name And Hobbies </Text>

//       <FlatList
//         data={users}
//         // keyExtractor={user => user.username}
//         keyExtractor={(item, index) => String(index)}
//         renderItem={showUser}
//       />

//       <TouchableOpacity onPress={addOneMore} style={styles.userButton}>
//         <Text style={styles.buttonText}>Add More</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 15,
//     // width: '100%',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     paddingHorizontal: 20,
//     borderBottomWidth: 3,
//     borderBlockColor: 'green',
//     borderEndWidth: 3,
//     borderStartWidth: 3,
//     // backgroundColor: 'yellow',
//     borderRadius: 10,
//   },
//   mainHeading: {
//     fontSize: 40,
//     alignSelf: 'center',
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     // fontFamily: 'VinSans-Regular',
//   },
//   subHeading: {
//     fontSize: 20,
//   },

//   userButton: {
//     backgroundColor: 'blue',
//     borderRadius: 100,
//     alignItems: 'center',
//     width: 365,
//     paddingVertical: 5,
//     marginVertical: 10,
//   },

//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   userInfo: {
//     fontSize: 20,
//     fontWeight: 'bold',
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

const AddHobbies = () => {
  const [users, setUsers] = useState([]);
  console.log('users', users);
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
          {/* <Text style={{fontSize: 20}}>Your Hobbies :- </Text> */}

          {userHobbies.map((hobby, index) => (
            // <Text key={index} style={styles.hobbyText}>
            //   {hobby}
            // </Text>

            <View style={styles.hobbiesContainer}>
              <TextInput
                style={styles.input}
                value={hobby}
                key={index}
                onChangeText={text => setHobbies(text)}
                placeholder="Enter Hobbies..."
              />
              {/* <TouchableOpacity onPress={addHobby} style={styles.addButton}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity> */}
            </View>
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
            <Text style={styles.userInfo}>Name: {item.username}</Text>
            <Text style={styles.userInfo}>
              Hobbies: {item.hobbies.map(h => h.name).join('\n ')}
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
    fontSize: 25,
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
    borderBottomWidth: 3,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    width: 400,
  },
  userInfo: {
    fontSize: 20,
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
