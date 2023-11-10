import {useRef, useState} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';

function ShowActionSheet() {
  const actionSheetRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleImagePicker = () => {
    actionSheetRef.current?.hide();
    ImagePicker.openPicker({
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCameraPicker = () => {
    ImagePicker.openCamera({
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={{flex: 1, margin: 10, alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 40,
          alignSelf: 'center',
          marginBottom: 20,
          color: 'green',
        }}>
        My Profile
      </Text>
      <View>
        <Image
          source={
            selectedImage
              ? {uri: selectedImage}
              : require('./assets/profile.png')
          }
          style={styles.profileimage}
        />

        <TouchableOpacity
          onPress={() => {
            actionSheetRef.current?.show();
          }}>
          <Icon name="edit" style={styles.editIcon} size={30} color="#900" />
        </TouchableOpacity>
      </View>

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

        <View style={{marginTop: 10}}>
          <TouchableOpacity style={styles.captureButton}>
            <Text style={styles.captureText}>Submit</Text>
          </TouchableOpacity>

          <ActionSheet ref={actionSheetRef}>
            <TouchableOpacity
              onPress={handleImagePicker}
              style={styles.actionButton1}>
              <Text style={{alignSelf: 'center', fontSize: 20}}>
                Upload Image
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCameraPicker}
              style={styles.actionButton1}>
              <Text style={{alignSelf: 'center', fontSize: 20}}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                actionSheetRef.current?.hide();
              }}
              style={styles.closeButton}>
              <Text style={{alignSelf: 'center', fontSize: 30}}>Close</Text>
            </TouchableOpacity>
          </ActionSheet>
        </View>
      </View>
    </View>
  );
}

export default ShowActionSheet;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    borderRadius: 15,

    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  profileimage: {
    borderRadius: 70,
    height: 150,
    width: 150,
  },
  editIcon: {
    position: 'relative',
    marginLeft: 115,
    marginTop: -20,
    marginBottom: 20,
  },
  captureButton: {
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 10,
    margin: 20,
  },
  captureText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },
  actionButton1: {
    height: 80,
    width: '100%',

    backgroundColor: 'orange',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
  closeButton: {
    height: 80,
    width: '100%',
    backgroundColor: 'green',

    justifyContent: 'center',
    alignSelf: 'center',
  },
});
