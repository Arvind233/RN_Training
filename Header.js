//Header custom

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={{...styles.header, ...props.style}}>
      <Text style={styles.title}>{props.title} Registeration Form</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
  },
});

export default Header;

// End
