// import 'react-native-gesture-handler';
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
//import App from './Biohacker';
//import App from './ToDoList';
//import RegisterScreen from './RegisterScreen';
//import DateOfBirth from './DateOfBirth';
//import App from './props&components';
//import App from './HomeScreen';
import AppRedux from './AppRedux';
import AppFinal from './AppFinal';
import AddHobbies from './AddHobbies';
import DynamicHobby from './DynamicHobby';
import MainScreen from './MainScreen';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainScreen);
