/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const flexLayout = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <View style={styles.container11}>
          <View style={styles.innerContainer1}></View>
          <View style={styles.innerContainer2}></View>
          <View style={styles.innerContainer3}></View>
          <View style={styles.innerContainer4}></View>
        </View>
        <View style={styles.container12}>
          <View style={styles.innerContainer21}></View>
          <View style={styles.innerContainer22}></View>
        </View>
        <View style={styles.container13}>
          <View
            style={{
              backgroundColor: 'red',
              height: '100%',
              width: '50%',
              marginLeft: 88,
              borderRadius: 10,
            }}></View>
          <View
            style={{
              backgroundColor: 'red',
              height: 80,
              width: 100,
              borderRadius: 10,
            }}></View>
        </View>
      </View>
      <View style={styles.container2}></View>
      <View style={styles.container3}></View>
      <View style={styles.container4}></View>
    </View>
  );
};

export default flexLayout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'yellow',
    rowGap: 8,
    padding: 5,
  },
  container1: {
    //flexDirection: 'row',
    flex: 2,
    //flexWrap: 'wrap',
    rowGap: 4,
  },
  container11: {
    flex: 1,
    flexShrink: 0.8,
    flexDirection: 'row',
    columnGap: 4,
  },
  innerContainer1: {
    backgroundColor: 'red',
    height: '100%',
    width: '25%',
    borderRadius: 10,
  },
  innerContainer2: {
    backgroundColor: 'red',
    height: '100%',
    width: '25%',
    borderRadius: 10,
  },
  innerContainer3: {
    backgroundColor: 'red',
    height: '100%',
    width: '25%',
    borderRadius: 10,
  },
  innerContainer4: {
    backgroundColor: 'red',
    height: '100%',
    width: '22%',
    borderRadius: 10,
  },
  container12: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
  },
  innerContainer21: {
    backgroundColor: 'red',
    height: '100%',
    width: '50%',
    borderRadius: 10,
  },
  innerContainer22: {
    backgroundColor: 'red',
    height: 80,
    width: 100,
    marginLeft: 90,
    borderRadius: 10,
  },
  container13: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer31: {
    backgroundColor: 'red',
    height: '100%',
    width: '50%',
    marginLeft: 88,
    borderRadius: 10,
  },
  container2: {
    backgroundColor: 'red',
    flex: 2,
    borderRadius: 10,
  },
  container3: {
    backgroundColor: 'red',
    flex: 1,
    borderRadius: 10,
  },
  container4: {
    backgroundColor: 'red',
    flex: 0.8,
    borderRadius: 10,
  },
});
