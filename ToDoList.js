import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// import React, {useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import Parent from './Parent';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Button, View, Text, ImageBackground} from 'react-native';
// import Biohacker from './Biohacker';

// import {createDrawerNavigator} from 'react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Biohacker" component={Biohacker} />
//         <Drawer.Screen name="Article" component={Parent} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
// export default MyDrawer;

// const Stack = createNativeStackNavigator();

// function HomeScreen({navigation}) {
//   return (
//     <View
//       style={{
//         flex: 1,
//         // alignItems: 'center',
//         // justifyContent: 'center',
//         // backgroundColor: 'gray',
//       }}>
//       <ImageBackground
//         source={require('./images/welcome1.png')}
//         resizeMode="cover"
//         style={{flex: 1}}>
//         <Text style={{fontSize: 40, marginBottom: 10, textAlign: 'center'}}>
//           Welcome Screen
//         </Text>
//         <Button
//           title="Go to Biohacker"
//           onPress={() => navigation.navigate('Biohacker')}
//         />
//       </ImageBackground>
//     </View>
//   );
// }

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomeScreen">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Biohacker" component={Biohacker} />
//         <Stack.Screen
//           name="Parent"
//           component={Parent}
//           options={{title: 'Good Morningg!!!'}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// // <NavigationContainer>
// //   <Parent />
// // </NavigationContainer>ß

// export default App;
