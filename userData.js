import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
// import ModalFile from './ModalFile';
import UserModal from './userModal';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const [allPharmacy, setAllPharmacy] = useState([
    {
      pharmacyName: 'Costco Pharmacies',
      medicineCategory: [
        {
          category: 'Diabetes',
          medicineName: [{name: 'metformin'}, {name: 'insulin'}],
        },
        {
          category: 'Mental Health',
          medicineName: [{name: 'lexapro'}, {name: 'celexa'}],
        },
      ],
    },
    {
      pharmacyName: 'Pfizer',
      medicineCategory: [
        {
          category: 'Tuberculosis',
          medicineName: [{name: 'Rifadin'}, {name: 'zinamide'}],
        },
        {
          category: 'Malaria',
          medicineName: [{name: 'mepron'}, {name: 'monodox'}],
        },
      ],
    },
  ]);

  const renderMedicineName = ({item}) => (
    <View style={{marginLeft: 30}}>
      <Text style={{fontSize: 18}}> Medicines - {item.name}</Text>
    </View>
  );

  const renderMedicineCategory = ({item}) => (
    <View style={styles.container}>
      <Text style={styles.category}>Disease - {item.category}</Text>
      <FlatList
        data={item.medicineName}
        keyExtractor={(medicine, index) => String(index)}
        renderItem={renderMedicineName}
      />
    </View>
  );

  const renderPharmacy = ({item}) => (
    <View style={styles.container}>
      <Text style={styles.pharmacyName}>{item.pharmacyName}</Text>
      <FlatList
        data={item.medicineCategory}
        keyExtractor={(category, index) => String(index)}
        renderItem={renderMedicineCategory}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Pharmacy Information</Text>
      <FlatList
        data={allPharmacy}
        keyExtractor={(pharmacy, index) => String(index)}
        renderItem={renderPharmacy}
      />
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.userButton}>
        <Text style={styles.buttonText}>Add More</Text>
      </TouchableOpacity>
      <UserModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddPharmacy={newPharmacy => {
          setAllPharmacy([...allPharmacy, newPharmacy]);
          setModalVisible(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 20,
    // borderBottomWidth: 3,
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
  pharmacyName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default App;
