/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './CameraTask';
//import CameraScreen from './CameraScreen';
// import ModalApp from './ModelFile';
// import ActionSheets from './Actionsheets';
import junkCamera from './junkCamera';
import FetchApi from './FetchApi';
import ShowActionSheet from './TestActionSheet';
import {name as appName} from './app.json';
import App from './App';
import AppCounter from './AppCounter';
import {Provider} from 'react-redux';
import configureStore from './store';
import TodoApp from './ToDoList';

AppRegistry.registerComponent(appName, () => App);
