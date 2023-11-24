import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from './Header';

const RegisterScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');

  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibilty = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const Register = () => {
    if (!firstName) {
      Alert.alert('Error', 'Please Enter your Name');
      return;
    }

    navigation.navigate('HomeScreen', {
      name: firstName,
      email: email,
      gender: value,
      dropdown: selected,
      hobbies: hobbies,
    });
  };

  return (
    <View style={styles.mainBox}>
      {/* <Header /> */}
      <View style={{backgroundColor: 'black'}}>
        <View style={{alignItems: 'center', width: '100%'}}>
          <Text style={styles.headerRegister}>Register</Text>
          <Text style={styles.detailsEntry}>Enter Your Details!!</Text>
        </View>
        <View style={styles.entrySection}>
          <View style={styles.allInfoContainer}>
            <TextInput
              style={styles.input}
              value={firstName}
              placeholder="Enter Your Name"
              onChangeText={text => setFirstName(text)}
            />

            <TextInput
              style={styles.input}
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Enter your password"></TextInput>

            <TouchableOpacity onPress={Register} style={styles.RegisterButton}>
              <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    flexDirection: 'column',
  },
  headerRegister: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailsEntry: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  entrySection: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 130,
    borderTopRightRadius: 130,
    paddingTop: 20,
    alignItems: 'center',
  },
  allInfoContainer: {
    flex: 1,
    alignItems: 'center',
  },

  input: {
    height: 40,
    width: 250,
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
});
