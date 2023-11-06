import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Button,
} from 'react-native';
import React, {useState} from 'react';

export default function Biohacker({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibilty = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    Alert.alert(
      'Enterred Data',
      'Email : ' + email + '\nPassword : ' + password,
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeading}>
        <Text style={{fontSize: 50, color: 'blue', fontWeight: 'bold'}}>
          BIOHACKER
        </Text>
      </View>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Enter your email"
        onChangeText={text => setEmail(text)}></TextInput>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Enter your password"></TextInput>

        <TouchableOpacity
          style={styles.togglePasswordVisibility}
          onPress={togglePasswordVisibilty}>
          <Image
            source={
              isPasswordVisible
                ? require('./images/eye.png')
                : require('./images/eyecross.png')
            }
            style={styles.iconImage}></Image>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Log In</Text>
      </TouchableOpacity>

      <View>
        <Button
          title="Go to MY TO DO LIST"
          onPress={() => navigation.navigate('Parent')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  togglePasswordVisibility: {
    padding: 10,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  mainHeading: {
    marginBottom: 60,
    alignSelf: 'center',
  },
  loginButton: {
    height: 40,
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 40,
  },
});
