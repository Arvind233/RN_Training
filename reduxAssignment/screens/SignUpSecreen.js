import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../actions/actions';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  // const signUpSuccess = useSelector(state => state.signUpSuccess);

  // console.log('all user', user);

  const handleSignUp = () => {
    const newUser = {name, email, password, phone};
    console.log('new user', newUser);
    // dispatch(signUp(newUser));

    if (!name) {
      Alert.alert('Error', 'Please Enter your Name');
      return;
    }

    if (!email) {
      Alert.alert('Error', 'Please Enter your Email');
      return;
    }

    if (!phone) {
      Alert.alert('Error', 'Please Enter your Phone Number');
      return;
    }

    if (!password) {
      Alert.alert('Error', 'Please Enter your Password');
      return;
    }

    dispatch(signUp(newUser));

    Alert.alert('Registration Successful', 'You can now log in!');
    // Navigate back to the login screen
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={text => setPhone(text)}
      />
      {/* <Button title="Sign Up" onPress={handleSignUp} /> */}
      <TouchableOpacity onPress={handleSignUp} style={styles.RegisterButton}>
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

export default SignUpScreen;

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
});
