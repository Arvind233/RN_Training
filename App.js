import {View, Text} from 'react-native';
import {useEffect} from 'react';
import UserData from './src/components/pharmacyData/UserData';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <UserData />;
};
export default App;
