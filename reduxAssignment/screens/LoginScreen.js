// LoginScreen.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login, toggleRememberMe, loginUser} from '../actions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RememberMeCheckbox = ({value, onToggle}) => {
  const checkboxStyle = {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <TouchableOpacity onPress={onToggle}>
      <View style={[checkboxStyle, value && {backgroundColor: 'black'}]}>
        {value && <Text style={{color: 'white'}}>✔️</Text>}
      </View>
    </TouchableOpacity>
  );
};

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const authUserData = useSelector(state => state.rootReducer);

  const savedCredentials = useSelector(state => state.registeredUsers || {});
  const registeredUsers = useSelector(state => state.registeredUsers);
  // const rememberMe = useSelector(state => state.rememberMe);

  // const toggleRememberMe = () => {
  //   dispatch(toggleRememberMe());
  // };

  // useEffect(() => {
  //   const loadRememberMe = async () => {
  //     try {
  //       const rememberMeValue = await AsyncStorage.getItem('rememberMe');
  //       setRememberMe(rememberMeValue === 'true');
  //       if (rememberMeValue === 'true' && savedCredentials.email) {
  //         setEmail(savedCredentials.email || '');
  //         setPassword(savedCredentials.password || '');
  //       } else {
  //         setEmail('');
  //         setPassword('');
  //       }
  //     } catch (error) {
  //       console.error('error loading remember from asysnc', error);
  //     }
  //   };
  //   loadRememberMe();
  //   // if (rememberMe && savedCredentials && savedCredentials.email) {
  //   //   setEmail(savedCredentials.email || '');
  //   //   setPassword(savedCredentials.password || '');
  //   // } else {
  //   //   setEmail('');
  //   //   setPassword('');
  //   // }
  // }, [savedCredentials]);

  // const handleLogin = () => {
  //   if (!email) {
  //     Alert.alert('Error', 'Please Enter your Email');
  //     return;
  //   }

  //   if (!password) {
  //     Alert.alert('Error', 'Please Enter your Phone Number');
  //     return;
  //   }
  //   // Implement your authentication logic here

  //   const user = {email, password};
  //   console.log(user.email);
  //   console.log(registeredUsers);

  //   const matchingUsers = registeredUsers.filter(
  //     registeredUser =>
  //       registeredUser.email == user.email &&
  //       registeredUser.password === user.password,
  //   );
  //   console.log(matchingUsers);

  //   if (matchingUsers.length > 0) {
  //     dispatch(login(user));

  //     if (rememberMe) {
  //       // setRememberMe(true);
  //       // Save credentials in AsyncStorage or secure storage
  //       AsyncStorage.setItem('rememberMe', 'true');
  //       AsyncStorage.setItem('savedCredentials', JSON.stringify(user));
  //     } else {
  //       AsyncStorage.setItem('rememberMe', 'false');
  //       AsyncStorage.removeItem('savedCredentials');
  //     }
  //     navigation.navigate('Home', {user});
  //   } else {
  //     Alert.alert(
  //       'user not found',
  //       'User information not found. Please signup.',
  //     );
  //   }
  // };

  // const navigateToSignUp = () => {
  //   navigation.navigate('SignUp');
  // };

  const handleRememberMe = () => {
    // dispatch(toggleRememberMe());
    setRememberMe(!rememberMe);
  };

  useEffect(() => {
    if (authUserData) {
      setRememberMe(authUserData?.is_remember);
      setEmail(authUserData?.remember_email);
      setPassword(authUserData?.remember_password);
    }
  }, [authUserData]);

  const handleSignUp = () => {
    // console.log(navigation);
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    let all_users = authUserData?.all_users;
    let selectedUser = all_users.filter(
      user => user.email == email && user.password == password,
    );
    console.log(selectedUser, 'selectedUser....');

    if (selectedUser.length != 0) {
      dispatch(login(selectedUser[0], rememberMe, navigation));
    } else {
      Alert.alert('User does not exist');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          fontSize: 40,
          marginBottom: 10,
          fontFamily: 'VinaSans-Regular',
        }}>
        Log In form
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <RememberMeCheckbox value={rememberMe} onToggle={handleRememberMe} />
        <Text>Remember Me</Text>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.LoginButton}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Log In
        </Text>
      </TouchableOpacity>
      {/* <Button title="Login" onPress={handleLogin} /> */}
      {/* <Button title="Sign Up" onPress={navigateToSignUp} /> */}
      <TouchableOpacity
        // onPress={navigateToSignUp}
        onPress={handleSignUp}
        style={styles.RegisterButton}>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 10,
    padding: 10,

    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderRadius: 15,
    //borderColor: 'black',
    //borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  RegisterButton: {
    backgroundColor: 'orange',
    borderRadius: 100,
    alignItems: 'center',
    width: 300,
    paddingVertical: 5,
    marginVertical: 10,
  },
  LoginButton: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',
    width: 300,
    paddingVertical: 5,
    marginVertical: 10,
  },
});

// // LoginScreen.js
// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {login, toggleRememberMe} from '../actions/actions';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const RememberMeCheckbox = ({value, onToggle}) => {
//   const checkboxStyle = {
//     width: 20,
//     height: 20,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: 'black',
//     marginRight: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   };

//   return (
//     <TouchableOpacity onPress={onToggle}>
//       <View style={[checkboxStyle, value && {backgroundColor: 'black'}]}>
//         {value && <Text style={{color: 'white'}}>✔️</Text>}
//       </View>
//     </TouchableOpacity>
//   );
// };

// const LoginScreen = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState();
//   const [rememberMe, setRememberMe] = useState(false);
//   const dispatch = useDispatch();

//   const savedCredentials = useSelector(state => state.user || {});
//   const registeredUsers = useSelector(state => state.registeredUsers);
//   // const rememberMe = useSelector(state => state.rememberMe);

//   // const toggleRememberMe = () => {
//   //   dispatch(toggleRememberMe());
//   // };

//   useEffect(() => {
//     const loadRememberMe = async () => {
//       try {
//         const rememberMeValue = await AsyncStorage.getItem('rememberMe');
//         setRememberMe(rememberMeValue === 'true');
//         if (rememberMeValue === 'true' && savedCredentials.email) {
//           setEmail(savedCredentials.email || '');
//           setPassword(savedCredentials.password || '');
//         }
//       } catch (error) {
//         console.error('error loading remember from asysnc', error);
//       }
//     };
//     loadRememberMe();
//     // if (rememberMe && savedCredentials && savedCredentials.email) {
//     //   setEmail(savedCredentials.email || '');
//     //   setPassword(savedCredentials.password || '');
//     // } else {
//     //   setEmail('');
//     //   setPassword('');
//     // }
//   }, [savedCredentials]);

//   const handleLogin = () => {
//     if (!email) {
//       Alert.alert('Error', 'Please Enter your Email');
//       return;
//     }

//     if (!password) {
//       Alert.alert('Error', 'Please Enter your Phone Number');
//       return;
//     }
//     // Implement your authentication logic here

//     const user = {email, password};
//     console.log(user.email);
//     console.log(registeredUsers);

//     const matchingUsers = registeredUsers.filter(
//       registeredUser =>
//         registeredUser.email == user.email &&
//         registeredUser.password === user.password,
//     );
//     console.log(matchingUsers);

//     if (matchingUsers.length > 0) {
//       dispatch(login(user));

//       if (rememberMe) {
//         // setRememberMe(true);
//         // Save credentials in AsyncStorage or secure storage
//         AsyncStorage.setItem('rememberMe', 'true');
//         AsyncStorage.setItem('savedCredentials', JSON.stringify(user));
//       } else {
//         AsyncStorage.setItem('rememberMe', 'false');
//         AsyncStorage.removeItem('savedCredentials');
//       }
//       navigation.navigate('Home', {user});
//     } else {
//       Alert.alert(
//         'user not found',
//         'User information not found. Please signup.',
//       );
//     }
//   };

//   const navigateToSignUp = () => {
//     navigation.navigate('SignUp');
//   };

//   const handleRememberMe = () => {
//     dispatch(toggleRememberMe());
//     // setRememberMe(!rememberMe);
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={text => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={text => setPassword(text)}
//       />

//       <View
//         style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
//         <RememberMeCheckbox value={rememberMe} onToggle={handleRememberMe} />
//         <Text>Remember Me</Text>
//       </View>

//       <TouchableOpacity onPress={handleLogin} style={styles.LoginButton}>
//         <Text
//           style={{
//             color: 'white',
//             fontSize: 25,
//             fontWeight: 'bold',
//           }}>
//           Log In
//         </Text>
//       </TouchableOpacity>
//       {/* <Button title="Login" onPress={handleLogin} /> */}
//       {/* <Button title="Sign Up" onPress={navigateToSignUp} /> */}
//       <TouchableOpacity
//         onPress={navigateToSignUp}
//         style={styles.RegisterButton}>
//         <Text
//           style={{
//             color: 'black',
//             fontSize: 25,
//             fontWeight: 'bold',
//           }}>
//           Sign up
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     margin: 10,
//     padding: 10,

//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     width: 300,
//     borderRadius: 15,
//     //borderColor: 'black',
//     //borderWidth: 2,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: 'rgb(220,220,220)',
//   },
//   RegisterButton: {
//     backgroundColor: 'orange',
//     borderRadius: 100,
//     alignItems: 'center',
//     width: 300,
//     paddingVertical: 5,
//     marginVertical: 10,
//   },
//   LoginButton: {
//     backgroundColor: 'blue',
//     borderRadius: 100,
//     alignItems: 'center',
//     width: 300,
//     paddingVertical: 5,
//     marginVertical: 10,
//   },
// });
