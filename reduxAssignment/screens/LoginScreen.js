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
import {login} from '../actions/actions';

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

  const savedCredentials = useSelector(state => state.user || {});
  const registeredUsers = useSelector(state => state.registeredUsers || []);

  useEffect(() => {
    if (rememberMe && savedCredentials && savedCredentials.email) {
      setEmail(savedCredentials.email || '');
      setPassword(savedCredentials.password || '');
    }
  }, [rememberMe, savedCredentials]);

  const handleLogin = () => {
    // Implement your authentication logic here

    const user = {email, password};
    console.log(user.email);
    console.log(registeredUsers);

    // const matchingUsers = registeredUsers.filter(registeredUser => {
    //   console.log(registeredUser);
    //   return (
    //     registeredUser.email === user.email &&
    //     registeredUser.password === user.password
    //   );
    // });
    const matchingUsers =
      registeredUsers[0].email == user.email &&
      registeredUsers[0].password === user.password;
    console.log(matchingUsers);

    if (matchingUsers) {
      dispatch(login(user));

      // Dispatch login action
      dispatch(login(user));

      if (rememberMe) {
        // Save credentials in AsyncStorage or secure storage
        // AsyncStorage.setItem('savedCredentials', JSON.stringify(user));
      }
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'user not found',
        'User information not found. Please signup.',
      );
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={styles.mainContainer}>
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
        <RememberMeCheckbox value={rememberMe} onToggle={toggleRememberMe} />
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
        onPress={navigateToSignUp}
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
// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from './actions';

// const RememberMeCheckbox = ({ value, onToggle }) => {
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
//       <View style={[checkboxStyle, value && { backgroundColor: 'black' }]}>
//         {value && <Text style={{ color: 'white' }}>✔️</Text>}
//       </View>
//     </TouchableOpacity>
//   );
// };

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const dispatch = useDispatch();
//   const savedCredentials = useSelector((state) => state.user);

//   useEffect(() => {
//     // Pre-fill email and password if "Remember Me" is checked and credentials are saved
//     if (rememberMe && savedCredentials) {
//       setEmail(savedCredentials.email);
//       setPassword(savedCredentials.password);
//     }
//   }, [rememberMe, savedCredentials]);

//   const handleLogin = () => {
//     // Implement your authentication logic here
//     const user = { email, password }; // Replace this with actual authentication

//     // Dispatch login action
//     dispatch(login(user));

//     // Save credentials if "Remember Me" is checked
//     if (rememberMe) {
//       // Save credentials in AsyncStorage or secure storage
//       // AsyncStorage.setItem('savedCredentials', JSON.stringify(user));
//     }
//   };

//   const navigateToSignUp = () => {
//     navigation.navigate('SignUp');
//   };

//   const toggleRememberMe = () => {
//     setRememberMe(!rememberMe);
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//       />
//       <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
//         <RememberMeCheckbox value={rememberMe} onToggle={toggleRememberMe} />
//         <Text>Remember Me</Text>
//       </View>
//       <Button title="Login" onPress={handleLogin} />
//       <Button title="Sign Up" onPress={navigateToSignUp} />
//     </View>
//   );
// };

// export default LoginScreen;
