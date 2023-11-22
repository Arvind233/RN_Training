import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  Alert,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Camera, CameraType} from 'react-native-camera-kit';

export default function App() {
  const cameraRef = useRef(null);
  const [name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraType, setCameraType] = useState('front');
  const [cameraFlash, setCameraFlash] = useState('off');

  // const openCamera = () => {
  //   //etCapturedImage(null);
  //   setModalVisible(true);
  // };

  const handleCamera = () => {
    setCameraType(cameraType == 'front' ? 'back' : 'front');
  };
  const handleFlash = () => {
    setCameraFlash(cameraFlash == 'off' ? 'on' : 'off');
  };

  const handleCapture = async () => {
    console.log(cameraRef.current);
    if (cameraRef.current) {
      try {
        const imageURI = await cameraRef.current.capture();
        setCapturedImage(imageURI);
        setModalVisible(false); // Close the camera after capturing
      } catch (error) {
        console.error('Error capturing image:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, alignSelf: 'center'}}>Register</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter Your Name"
          onChangeText={text => setFirstName(text)}
        />

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter Your Email"
          onChangeText={text => setEmail(text)}
        />
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Capture Image</Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Camera
              style={{height: '85%', width: '100%'}}
              //style={{flex: 0.5}}
              ref={cameraRef}
              cameraType={cameraType}
              flashMode={cameraFlash}
              saveToCameraRoll={true}
            />

            {/* {capturedImage ? (
              <View style={styles.capturedImageContainer}>
                <Image
                  source={{uri: capturedImage}}
                  style={styles.capturedImage}
                />
              </View>
            ) : (
              <Camera
                style={styles.camera}
                ref={cameraRef}
                cameraType={cameraType}
                flashMode={cameraFlash}
              />
            )}

            {!capturedImage && (
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleCapture}>
                <Text style={styles.textStyle}>Capture Image</Text>
              </Pressable>
            )} */}

            <View style={styles.captureButtonContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.captureButton}>
                <Text style={styles.captureText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCapture}
                style={[styles.captureButton, {width: 50}]}>
                <Text style={styles.captureText}></Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCamera}
                style={styles.captureButton}>
                <Text style={styles.captureText}>Flip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleFlash}
                style={styles.captureButton}>
                <Text style={styles.captureText}>Flash</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* {capturedImage ? (
        <View style={styles.capturedImageContainer}>
          <Image source={{uri: capturedImage}} style={styles.capturedImage} />
        </View>
      ) : (
        <Camera
          style={styles.camera}
          ref={cameraRef}
          cameraType={CameraType.Back}
          flashMode="auto"
        />
      )}

      {!capturedImage && (
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={handleCapture}>
          <Text style={styles.textStyle}>Capture Image</Text>
        </Pressable>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    width: 250,
    borderRadius: 15,

    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  capturedImageContainer: {
    alignItems: 'center',
    margin: 20,
  },
  capturedImage: {
    width: 200,
    height: 200,
  },
  cameraContainer: {},

  captureButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //position: 'absolute',
    //columnGap: 20,
    bottom: 20,
    padding: 10,

    // alignSelf: 'center',
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
  camera: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: 22,
  },
  modalView: {
    //backgroundColor: 'white',
    //borderRadius: 20,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    //shadowColor: '#000',
  },
  button: {
    height: 40,
    width: 250,
    borderRadius: 15,
    alignSelf: 'center',
    padding: 10,
    elevation: 2,
    marginBottom: 15,
    textAlign: 'center',
  },
  Hidebutton: {
    height: 40,
    width: 180,
    borderRadius: 15,
    alignSelf: 'center',
    padding: 10,
    textAlign: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  HidebuttonClose: {
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
