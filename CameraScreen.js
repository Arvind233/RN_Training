import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {RNCameraKit} from 'react-native-camera-kit';
import React, {useState} from 'react';

const CameraScreen = () => {
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = async () => {
    try {
      const image = await RNCameraKit.capture();
      setCapturedImage(image.uri);
    } catch (error) {
      console.error('Error capturing image: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <RNCameraKit ref={ref => (this.cameraKit = ref)} style={styles.camera} />
      <View style={styles.captureButtonContainer}>
        <TouchableOpacity style={styles.captureButton} onPress={captureImage}>
          <Text style={styles.captureText}>Capture</Text>
        </TouchableOpacity>
      </View>
      {capturedImage && (
        <View style={styles.previewContainer}>
          <Text style={styles.previewText}>Captured Image:</Text>
          <Image style={styles.previewImage} source={{uri: capturedImage}} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  captureButtonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  captureButton: {
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 20,
  },
  captureText: {
    color: 'white',
    fontSize: 18,
  },
  previewContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  previewText: {
    fontSize: 18,
    marginBottom: 10,
  },
  previewImage: {
    width: 200,
    height: 200,
  },
});

export default CameraScreen;
