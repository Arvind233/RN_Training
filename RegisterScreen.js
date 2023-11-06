import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
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
  const [value, setValue] = useState(0);

  const Register = () => {
    navigation.navigate('HomeScreen', {
      name: firstName,
      email: email,
      gender: dataRadio,
      dropdown: data,
    });
  };

  const data = [
    {key: '1', value: 'Indian'},
    {key: '2', value: 'American'},
    {key: '3', value: 'Non-Indian'},
  ];

  const dataRadio = [
    {label: 'Male', value: 0},
    {label: 'Female', value: 1},
  ];

  return (
    <View>
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
                Select Your Community
              </Text>
              <SelectList
                setSelected={value => setSelected(value)}
                data={data}
                placeholder={'Select Community'}
                save="value"
              />
            </View>

            <DateOfBirth />

            <Text style={{fontSize: 20, marginBottom: 15}}>Hobbies</Text>
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
    paddingTop: 30,
    alignItems: 'center',
  },
  allInfoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  radioText: {
    fontSize: 10,
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

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// //import RadioGroup from 'react-native-radio-buttons-group';
// import CheckBox from 'react-native-checkbox';
// import {RadioButton} from 'react-native-paper';
// import {Dropdown} from 'react-native-element-dropdown';
// import {DatePicker} from 'react-native-datepicker';

// const data = [
//   {label: 'Indian', value: 1},
//   {label: 'Non-Indian', value: 2},
// ];

// function RegisterScreen() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [gender, setGender] = useState('male');
//   const [checked, setChecked] = useState('');

//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.Information}>
//         <Text style={styles.Informationtext}>Please Enter Your Detalis!!</Text>
//       </View>
//       <TextInput
//         style={styles.input}
//         value={firstName}
//         placeholder="Enter your first name"
//         onChangeText={text => setFirstName(text)}
//       />

//       <TextInput
//         style={styles.input}
//         value={lastName}
//         placeholder="Enter your last name"
//         onChangeText={text => setLastName(text)}
//       />

//       <TextInput
//         style={styles.input}
//         value={email}
//         placeholder="Enter your Email"
//         onChangeText={text => setEmail(text)}
//       />

//       {/* <View style={styles.dateContainer}>
//         <Text>Date Of Birth:</Text>
//         <DatePicker
//           //style={{width: 200}}
//           date={dateOfBirth}
//           mode="date"
//           // placeholder="Select date"
//           // format="YYYY-MM-DD"
//           // minDate="1900-01-01"
//           // maxDate="2023-12-31"
//           // confirmBtnText="Confirm"
//           // cancelBtnText="cancel"
//           onDateChange={date => setDateOfBirth(date)}
//         />
//       </View> */}
//       <View style={styles.dropdown1}>
//         <Text style={{fontSize: 20, color: 'black', width: '50%'}}>
//           Select Community
//         </Text>
//         <Dropdown
//           style={styles.dropdownItem}
//           data={data}
//           placeholder="Community"
//           labelField="label"
//         />
//       </View>
//       <View style={styles.genderContainer}>
//         <Text style={{fontSize: 20, marginBottom: 15}}>Gender</Text>
//         <View style={{flexDirection: 'row'}}>
//           <RadioButton
//             value="first"
//             status={checked === 'first' ? 'checked' : 'unchecked'}
//             onPress={() => setChecked('first')}
//           />
//           <Text>Male</Text>
//         </View>
//         <View style={{flexDirection: 'row'}}>
//           <RadioButton
//             value="second"
//             label="Female"
//             status={checked === 'second' ? 'checked' : 'unchecked'}
//             onPress={() => setChecked('second')}
//           />
//           <Text>Female</Text>
//         </View>
//       </View>

//       <Text style={{fontSize: 20, marginBottom: 15}}>Hobbies</Text>
//       <View style={styles.mainCheckBoxContainer}>
//         <View style={styles.checkboxContainer}>
//           <CheckBox label="Reading" />
//         </View>

//         <View style={styles.checkboxContainer}>
//           <CheckBox label="Singing" />
//         </View>
//         <View style={styles.checkboxContainer}>
//           <CheckBox label="Traveling" />
//         </View>
//       </View>

//       <TouchableOpacity style={styles.registerButton}>
//         <Text style={styles.registerButtonText}>Register</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   Information: {
//     width: '100%',
//     marginBottom: 15,
//   },
//   Informationtext: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: 'blue',
//   },
//   mainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 15,
//     //paddingHorizontal: 20,
//     //backgroundColor: 'green',
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderRadius: 15,
//     borderColor: 'black',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   mainCheckBoxContainer: {
//     alignSelf: 'flex-start',
//     //backgroundColor: 'yellow',
//     width: '100%',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   registerButton: {
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 20,
//     marginBottom: 10,
//     borderWidth: 2,
//     marginTop: 15,
//   },
//   registerButtonText: {
//     color: 'black',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     fontSize: 25,
//   },
//   genderContainer: {
//     alignSelf: 'flex-start',
//     //backgroundColor: 'green',
//     width: '100%',
//   },
//   dropdown1: {
//     width: '100%',
//     flexDirection: 'row',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   dropdownItem: {
//     paddingLeft: 15,
//     width: '35%',
//     //backgroundColor: 'yellow',
//   },
// });

// export default RegisterScreen;
