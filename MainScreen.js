// MainFile.js
// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import ModalFile from './ModalFile';

// const MainFile = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [userData, setUserData] = useState({name: '', hobbies: []});
//   // const [userData, setUserData] = useState(staticData[0]);

//   const handleAddUser = user => {
//     setUserData(user);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.mainHeading}> Welcome </Text>
//       <Text style={styles.subHeading}>Please Add Your Name And Hobbies </Text>

//       <Text style={{fontSize: 20}}>User Name: {userData.name}</Text>
//       <Text style={{fontSize: 20}}>Hobbies:</Text>
//       {userData.hobbies.map((hobby, index) => (
//         <Text key={index}>{hobby.hobby}</Text>
//       ))}
//       {/* <Text key={index}>{userData.hobbies.name}</Text> */}

//       <TouchableOpacity
//         onPress={() => setModalVisible(true)}
//         style={styles.userButton}>
//         <Text style={styles.buttonText}>Add Your Name And Hobbies</Text>
//       </TouchableOpacity>
//       <ModalFile
//         isVisible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         onAddUser={handleAddUser}
//       />
//     </View>
//   );
// };

// export default MainFile;

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
//     fontSize: 25,
//   },
//   userButton: {
//     backgroundColor: 'blue',
//     borderRadius: 100,
//     alignItems: 'center',
//     width: 400,
//     paddingVertical: 5,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// import React, {useState, useEffect} from 'react';
// import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
// import ModalFile from './ModalFile';

// const AddHobbies = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [users, setUsers] = useState([
//     {
//       username: 'arvind',
//       hobbies: [{name: 'cricket'}, {name: 'volleyball'}],
//     },
//     {
//       username: 'vaibhav',
//       hobbies: [{name: 'dancing'}, {name: 'singing'}],
//     },
//   ]);
//   console.log('users', users);

//   const handleAddUser = user => {
//     setUsers([...users, user]);
//   };

//   const addUser = () => {
//     setModalVisible(true);
//   };

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

//       <TouchableOpacity
//         // onPress={() => setModalVisible(true)}
//         onPress={addUser}
//         style={styles.userButton}>
//         <Text style={styles.buttonText}>Add More</Text>
//       </TouchableOpacity>
//       <ModalFile
//         visible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         onData={handleAddUser}
//       />
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

// import React, {useState} from 'react';
// import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
// import ModalFile from './ModalFile';

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [users, setUsers] = useState([
//     {
//       username: 'arvind',
//       hobbies: [{name: 'cricket'}, {name: 'volleyball'}],
//     },
//     {
//       username: 'vaibhav',
//       hobbies: [{name: 'dancing'}, {name: 'singing'}],
//     },
//   ]);
//   console.log('users', users);

//   const handleAddUser = (username, hobbies) => {
//     const newUser = {
//       username,
//       hobbies: hobbies.map(hobby => ({name: hobby.hobby})),
//     };
//     setUsers(prevUsers => [...prevUsers, newUser]);
//     //   setModalVisible(false);
//   };

//   const addUser = () => {
//     setModalVisible(true);
//   };

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
//         keyExtractor={(hobby, index) => String(index)}
//         renderItem={showHobbies}
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.mainHeading}> Welcome </Text>
//       <Text style={styles.subHeading}>Please Add Your Name And Hobbies </Text>

//       <FlatList
//         data={users}
//         keyExtractor={(item, index) => String(index)}
//         renderItem={showUser}
//       />

//       <TouchableOpacity onPress={addUser} style={styles.userButton}>
//         <Text style={styles.buttonText}>Add More</Text>
//       </TouchableOpacity>
//       <ModalFile
//         isVisible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         onAddUser={handleAddUser}
//       />
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

// export default App;

import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ModalFile from './ModalFile';
import SplashScreen from 'react-native-splash-screen';

const MainScreen = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([
    {
      username: 'arvind',
      hobbies: [{name: 'cricket'}, {name: 'volleyball'}],
    },
    {
      username: 'vaibhav',
      hobbies: [{name: 'dancing'}, {name: 'singing'}],
    },
  ]);
  console.log('allusers', users);

  const handleAddUser = userData => {
    setUsers(prevUsers => [...prevUsers, userData]);
    setModalVisible(false);
    // console.log('userdata', userData);
  };

  const addUser = () => {
    setModalVisible(true);
  };

  const showHobbies = ({item}) => (
    <View style={{marginLeft: 10}}>
      <Text style={{fontSize: 20}}> {item.name}</Text>
    </View>
  );

  const showUser = ({item, index}) => (
    <View style={styles.container}>
      <Text style={styles.userInfo}>Name : {item.username}</Text>
      <Text style={{fontSize: 40, fontFamily: 'Italianno-Regular'}}>
        Hobbies : -{' '}
      </Text>
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
        isVisible={modalVisible}
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
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderBlockColor: 'green',
    borderEndWidth: 3,
    borderStartWidth: 3,
    borderRadius: 10,
  },
  mainHeading: {
    fontSize: 40,
    alignSelf: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
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

export default MainScreen;
