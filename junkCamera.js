import React, {useState} from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
//import ActionSheet from 'react-native-actions-sheet';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [width, setWidth] = useState(250);
  const [height, setHeight] = useState(200);
  const [name, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width,
      height,
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
        setHeight(height);
        setWidth(width);
        console.log(image);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCameraPicker = () => {
    ImagePicker.openCamera({
      width,
      height,
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
        setHeight(height);
        setWidth(width);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // const handleCropImage = () => {
  //   if (selectedImage) {
  //     ImagePicker.openCropper({
  //       path: selectedImage,
  //       width,
  //       height,
  //       cropping: true,
  //       cropperCircleOverlay: false, // Set to true if you want a circular crop
  //       freeStyleCropEnabled: true,
  //     })
  //       .then(image => {
  //         setSelectedImage(image.path);
  //         setHeight(250);
  //         setWidth(170);
  //         console.log(image);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 40,
          alignSelf: 'center',
          marginBottom: 20,
          color: 'green',
        }}>
        Sign In
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter Your Name"
          onChangeText={text => setFirstName(text)}
        />

        <TextInput
          style={styles.input}
          value={phoneNumber}
          placeholder="Enter Your Phone Number"
          onChangeText={text => setPhoneNumber(text)}
        />
      </View>
      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          style={{width: width, height: height, marginVertical: 20}}
        />
      )}
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          onPress={handleImagePicker}
          style={styles.captureButton}>
          <Text style={styles.captureText}>Choose From Gallery</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          onPress={handleCameraPicker}
          style={styles.captureButton}>
          <Text style={styles.captureText}>Take a Photo</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={{marginTop: 20, marginBottom: 50}}>
        {selectedImage && (
          <Button title="Crop Image" onPress={handleCropImage} />
        )}
      </View> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    borderRadius: 15,

    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  captureButton: {
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 20,
    margin: 25,
  },
  captureText: {
    color: 'white',
    fontSize: 18,
  },
});
