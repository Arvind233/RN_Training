import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ModalFile from './ModalFile';
import SplashScreen from 'react-native-splash-screen';

const MainScreen = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([
    {
      username: 'arvind',
      hobbies: [{name: 'cricket'}, {name: 'volleyball'}],
    },
    {
      username: 'vaibhav',
      hobbies: [{name: 'dancing'}, {name: 'singing'}],
    },
  ]);
  console.log('allusers', users);

  const handleAddUser = userData => {
    setUsers(prevUsers => [...prevUsers, userData]);
    setModalVisible(false);
    // console.log('userdata', userData);
  };

  const addUser = () => {
    setModalVisible(true);
  };

  const showHobbies = ({item}) => (
    <View style={{marginLeft: 10}}>
      <Text style={{fontSize: 20}}> {item.name}</Text>
    </View>
  );

  const showUser = ({item, index}) => (
    <View style={styles.container}>
      <Text style={styles.userInfo}>Name : {item.username}</Text>
      <Text style={{fontSize: 40, fontFamily: 'Italianno-Regular'}}>
        Hobbies : -{' '}
      </Text>
      <FlatList
        data={item.hobbies}
        keyExtractor={(hobby, index) => String(index)}
        renderItem={showHobbies}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}> Welcome </Text>
      <Text style={styles.subHeading}>Please Add Your Name And Hobbies </Text>

      <FlatList
        data={users}
        keyExtractor={(item, index) => String(index)}
        renderItem={showUser}
      />

      <TouchableOpacity onPress={addUser} style={styles.userButton}>
        <Text style={styles.buttonText}>Add More</Text>
      </TouchableOpacity>

      <ModalFile
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddUser={handleAddUser}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderBlockColor: 'green',
    borderEndWidth: 3,
    borderStartWidth: 3,
    borderRadius: 10,
  },
  mainHeading: {
    fontSize: 40,
    alignSelf: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 20,
  },
  userButton: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',
    width: 365,
    paddingVertical: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainScreen;
