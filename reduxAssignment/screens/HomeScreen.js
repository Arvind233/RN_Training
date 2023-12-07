//HomeScreen.js
import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, onUserLogout} from '../actions/actions';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  // const user = useSelector(state => state.user);
  const currentUser = useSelector(state => state.authReducer?.current_user);

  // const handleLogout = () => {
  //   dispatch(logout());

  //   // Navigate back to the login screen
  //   navigation.navigate('Login');
  // };

  const handleLogout = () => {
    dispatch(onUserLogout(navigation));
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 60}}>Welcome</Text>
      <Text style={{fontSize: 30}}>Email: {currentUser ? user.email : ''}</Text>
      <Text style={{fontSize: 30}}>
        Password: {currentUser ? user.password : ''}
      </Text>

      <TouchableOpacity onPress={handleLogout} style={styles.LoginButton}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  LoginButton: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',
    width: 300,
    paddingVertical: 5,
    marginVertical: 10,
  },
});
