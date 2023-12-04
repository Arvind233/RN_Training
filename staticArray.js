import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Modal,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const AddHobbies = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [users, setUsers] = useState([
    {
      username: 'arvind',
      hobbies: [{name: 'cricket'}, {name: 'volleyball'}],
    },
    {
      username: 'vaibhav',
      hobbies: [{name: 'dancing'}, {name: 'singing'}],
    },
    {
      username: 'neeraj',
      hobbies: [{name: 'playing Video games'}, {name: 'comedy'}],
    },
  ]);
  console.log('users', users);

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
        keyExtractor={hobby => hobby.name}
        renderItem={showHobbies}
      />
    </View>
  );

  const addOneMore = () => {
    const user2 = {
      username: 'yash',
      hobbies: [{name: 'Traveling'}, {name: 'Cooking'}],
    };

    setUsers(prevusers => [...prevusers, user2]);
    return;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}> Welcome </Text>
      <Text style={styles.subHeading}>Please Add Your Name And Hobbies </Text>

      <FlatList
        data={users}
        // keyExtractor={user => user.username}
        keyExtractor={(item, index) => String(index)}
        renderItem={showUser}
      />

      <TouchableOpacity onPress={addOneMore} style={styles.userButton}>
        <Text style={styles.buttonText}>Add More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderBlockColor: 'green',
    borderEndWidth: 3,
    borderStartWidth: 3,
    // backgroundColor: 'yellow',
    borderRadius: 10,
  },
  mainHeading: {
    fontSize: 40,
    alignSelf: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    // fontFamily: 'VinSans-Regular',
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

export default AddHobbies;
