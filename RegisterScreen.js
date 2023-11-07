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
import DateOfBirth from './DateOfBirth';
import CheckBox from 'react-native-checkbox';
import {SelectList} from 'react-native-dropdown-select-list';
import RadioForm from 'react-native-simple-radio-button';

const RegisterScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [selected, setSelected] = React.useState('');
  const [value, setValue] = useState('');

  const [hobbies, setHobbies] = useState([]);

  const Register = () => {
    if (!firstName) {
      Alert.alert('Error', 'Please Enter your Name');
      return;
    }

    if (!email) {
      Alert.alert('Error', 'Please Enter your Email');
      return;
    }

    if (hobbies.length === 0) {
      Alert.alert('Error', 'Please Select Atleast one Hobby');
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

  const data = [
    {key: '1', value: 'Indian'},
    {key: '2', value: 'American'},
    {key: '3', value: 'Non-Indian'},
  ];

  const dataRadio = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];

  return (
    <View style={styles.mainBox}>
      <Header />
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
              value={email}
              placeholder="Enter Your Email"
              onChangeText={text => setEmail(text)}
            />

            <View style={{padding: 10}}>
              <Text style={styles.radioText}>Select your Gender</Text>
              <RadioForm
                radio_props={dataRadio}
                onPress={value => setValue(value)}
              />
            </View>

            <View style={{paddingHorizontal: 10, padding: 10}}>
              <Text style={{fontSize: 20, alignSelf: 'center'}}>
                Select Your Citizenship
              </Text>
              <SelectList
                setSelected={value => setSelected(value)}
                data={data}
                placeholder={'Select Citizenship'}
                save="value"
              />
            </View>

            <DateOfBirth />

            <Text style={{fontSize: 20, marginBottom: 10, marginTop: 10}}>
              Hobbies
            </Text>
            <View style={styles.mainCheckBoxContainer}>
              <View style={styles.checkboxContainer}>
                <CheckBox label="Reading" />
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox label="Singing" />
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox label="Traveling" />
              </View>
            </View>

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
  radioText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    alignSelf: 'center',
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
  mainCheckBoxContainer: {
    alignSelf: 'flex-start',
    //backgroundColor: 'yellow',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
