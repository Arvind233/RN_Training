import 'react-native-gesture-handler';
import React, {useEffect, useState, useImperativeHandle} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
// import Parent from './Parent';
// import Test from './Test';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
// import {Register} from './src/screen/register/Register';
import {Register} from './reduxFinal/screen/register/Register';
import {ReduxDemo} from './src/screen/reduxDemo/ReduxDemo';
// import {Login} from './src/screen/login/Login';
import {Login} from './reduxFinal/screen/login/Login';
// import {Home} from './src/screen/home/Home';
import {Home} from './reduxFinal/screen/home/Home';

// import {store, persistor} from './src/store/configureStore';
import {store, persistor} from './reduxFinal/store/configureStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppRedux = () => {
  const [initialRouteName, setRoute] = useState(null);

  useEffect(() => {
    console.log(store, 'storeeee');
    let authUser = store.getState().authReducer || {};
    if (
      authUser &&
      authUser.current_user &&
      Object.keys(authUser?.current_user).length > 0
    ) {
      setRoute('Home');
    } else {
      setRoute('Login');
    }
  }, []);

  return initialRouteName != null ? (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <NavigationContainer>
        {/* <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen
              name="Parent"
              component={Parent}
              options={{drawerLabel: 'Home111'}}
            />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="ReduxDemo" component={ReduxDemo} />
          </Drawer.Navigator> */}
        <Stack.Navigator initialRouteName={initialRouteName}>
          <Stack.Screen name="Login" component={Login} />
          {/* <Stack.Screen name="Test" component={Test} /> */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
          {/* <Stack.Screen
            name="Parent"
            component={Parent}
            options={{title: 'Overview'}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  ) : (
    <></>
  );
};

export default AppRedux;

// function CustomDrawerContent(props) {
//   return (
//     <View style={{flex: 1}}>
//       <DrawerContentScrollView {...props} style={{}}>
//         <TouchableOpacity
//           style={{
//             backgroundColor: 'gray',
//             marginVertical: 5,
//             paddingVertical: 5,
//           }}
//           onPress={() => props.navigation.navigate('Parent')}>
//           <Text>Parent Screen</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             backgroundColor: 'gray',
//             marginVertical: 5,
//             paddingVertical: 5,
//           }}
//           onPress={() => props.navigation.navigate('Register')}>
//           <Text>Register Screen</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             backgroundColor: 'gray',
//             marginVertical: 5,
//             paddingVertical: 5,
//           }}
//           onPress={() => props.navigation.navigate('ReduxDemo')}>
//           <Text>Redux Demo</Text>
//         </TouchableOpacity>
//       </DrawerContentScrollView>
//     </View>
//   );
// }

/**
 * In React, the forwardRef function is used to pass
 *  a ref from a parent component down to one of its child components,
 *  even when that child component is a functional component.
 *  This is especially useful in cases where you want to access the
 *  DOM elements or internal methods of a child component from its parent.
 *  forwardRef allows you to maintain a reference to the child component
 *  and interact with it directly.
 */

/**
 * useImperativeHandle is a hook in React that allows
 *  a functional component to customize the instance value that
 *  is exposed when a parent component calls ref on a child component.
 *  This hook is useful when you need to provide a more controlled or
 *  limited interface to the parent component when using ref with functional components.

Here's how useImperativeHandle works:

You can use it inside a child functional component to define a custom interface f
or the component instance that will be accessible through the ref passed by the
parent component.

The hook takes two arguments:

A ref object (usually created using useRef) that represents the component's instance.
A function that returns an object of methods and properties to expose to the parent component.
 */
