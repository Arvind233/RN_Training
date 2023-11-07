import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RegisterScreen from './RegisterScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({route}) => {
  const {name, email, gender, dropdown} = route.params;
  return (
    <View style={styles.mainConatiner}>
      <Text style={{fontSize: 20}}>Name : {name}</Text>

      <Text style={{fontSize: 20}}>Email : {email}</Text>

      <Text style={{fontSize: 20}}>Gender : {gender}</Text>
      <Text style={{fontSize: 20}}>Selected Community : {dropdown}</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{title: 'Registration Form'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  mainConatiner: {
    padding: 20,
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'green',
  },
});
