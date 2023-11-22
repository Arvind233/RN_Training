import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import TodoReducer from './TodoReducer';

export default function App() {
  return (
    <Provider store={store}>
      <TodoReducer />
    </Provider>
  );
}

// import React, {Component} from 'react';
// import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
// import ListItem from './components/ListItem';
// import {connect} from 'react-redux';
// import {addPlace} from './actions/place';
// class App extends Component {
//   state = {
//     placeName: '',
//     places: [],
//   };
//   placeSubmitHandler = () => {
//     if (this.state.placeName.trim() === '') {
//       return;
//     }
//     this.props.add(this.state.placeName);
//   };
//   placeNameChangeHandler = value => {
//     this.setState({
//       placeName: value,
//     });
//   };
//   placesOutput = () => {
//     return (
//       <FlatList
//         style={styles.listContainer}
//         data={this.props.places}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={info => <ListItem placeName={info.item.value} />}
//       />
//     );
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder="Seach Places"
//             style={styles.placeInput}
//             value={this.state.placeName}
//             onChangeText={this.placeNameChangeHandler}></TextInput>
//           <Button
//             title="Add"
//             style={styles.placeButton}
//             onPress={this.placeSubmitHandler}
//           />
//         </View>
//         <View style={styles.listContainer}>{this.placesOutput()}</View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 30,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     width: '100%',
//   },
//   placeInput: {
//     width: '70%',
//     borderWidth: 1,
//   },
//   placeButton: {
//     width: '30%',
//   },
//   listContainer: {
//     marginTop: 10,
//     width: '100%',
//   },
// });
// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     add: name => {
//       dispatch(addPlace(name));
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
