/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
//import CameraScreen from './CameraScreen';
// import ModalApp from './ModelFile';
// import ActionSheets from './Actionsheets';
import junkCamera from './junkCamera';
import FetchApi from './FetchApi';
import ShowActionSheet from './TestActionSheet';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FetchApi);
